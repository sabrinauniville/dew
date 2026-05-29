import { auth, getUserDocRef, initModules, initSettings } from '../../services/firebase-service.js';
import { elements, renderStudentDashboard, renderModuleDetail } from '../../components/ui.js';
import { gradeAnswer, calculateAverage } from '../../utils/utils.js';
import { moduleDefinitions, defaultSettings } from '../../data/data.js';

export async function loadStudentData(uid) {
  const snapshot = await getUserDocRef(uid).get();
  window.userData = snapshot.exists ? snapshot.data() : {};
  return window.userData;
}

export async function loadStudentDashboard(uid) {
  const [modules, settings] = await Promise.all([
    initModules(moduleDefinitions),
    initSettings(defaultSettings)
  ]);
  window.currentModules = modules.length ? modules : moduleDefinitions;
  window.platformSettings = settings;
  await loadStudentData(uid);
  renderStudentDashboard(window.userData, window.currentModules, window.platformSettings, calculateAverage);
  renderModuleDetail(window.currentModules[0] || { lessons: [] }, window.userData, window.platformSettings);
}

export async function updateUserProgress(uid, moduleId, lessonId, score, weight) {
  const docRef = getUserDocRef(uid);
  const docSnap = await docRef.get();
  const data = docSnap.exists ? docSnap.data() : {};
  const progress = data.progress || {};
  const moduleProgress = progress[moduleId] || {};
  const lessonProgress = moduleProgress[lessonId] || { attempts: 0, completed: false, score: 0, weight: 0 };
  lessonProgress.attempts = (lessonProgress.attempts || 0) + 1;
  lessonProgress.score = Math.max(lessonProgress.score, score);
  lessonProgress.weight = weight;
  lessonProgress.completed = true;
  lessonProgress.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  moduleProgress[lessonId] = lessonProgress;
  progress[moduleId] = moduleProgress;
  const totalPoints = Object.values(progress).reduce((sum, moduleEntry) => {
    return sum + Object.values(moduleEntry).reduce((lessonSum, lessonEntry) => lessonSum + (lessonEntry.score || 0), 0);
  }, 0);
  const totalAttempts = (data.totalAttempts || 0) + 1;
  await docRef.set({ progress, points: totalPoints, totalAttempts }, { merge: true });
}

export async function handleExerciseSubmit(button) {
  const moduleId = button.dataset.module;
  const lessonId = button.dataset.lesson;
  const exerciseId = button.dataset.exercise;
  const module = window.currentModules.find((mod) => mod.id === moduleId);
  const lesson = module.lessons.find((lessonItem) => lessonItem.id === lessonId);
  const exercise = lesson.exercises.find((ex) => ex.id === exerciseId);
  const user = auth.currentUser;
  if (!user) return alert('Faça login antes de enviar respostas.');

  const currentLessonProgress = window.userData.progress?.[moduleId]?.[lessonId] || { attempts: 0 };
  const settings = window.platformSettings;
  if (currentLessonProgress.attempts >= (settings.attemptLimit || defaultSettings.attemptLimit)) {
    return alert('Limite de tentativas atingido para este módulo. Aguarde liberação do admin.');
  }

  let answerValue;
  if (exercise.type === 'radio') {
    const selected = elements.moduleDetail.querySelector(`input[name="${moduleId}-${lessonId}-${exercise.id}"]:checked`);
    answerValue = selected ? selected.value : null;
  } else if (exercise.type === 'checkbox') {
    answerValue = Array.from(elements.moduleDetail.querySelectorAll(`input[name="${moduleId}-${lessonId}-${exercise.id}"]:checked`)).map((input) => input.value);
  } else {
    answerValue = document.getElementById(`${moduleId}-${lessonId}-${exercise.id}-response`).value;
  }
  const score = gradeAnswer(exercise, answerValue);
  await updateUserProgress(user.uid, moduleId, lessonId, score, exercise.weight);
  alert(`Resposta salva. Pontuação: ${score}/${exercise.weight}`);
  await loadStudentData(user.uid);
  renderStudentDashboard(window.userData, window.currentModules, window.platformSettings, calculateAverage);
}

export function bindModuleButtons() {
  document.addEventListener('click', async (event) => {
    const target = event.target;
    if (target.matches('.module-card button')) {
      const moduleId = target.dataset.module;
      const module = window.currentModules.find((mod) => mod.id === moduleId);
      renderModuleDetail(module, window.userData, window.platformSettings);
    }
    if (target.matches('.exercise-submit')) {
      await handleExerciseSubmit(target);
    }
  });
}
