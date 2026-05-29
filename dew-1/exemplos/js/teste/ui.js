export const elements = {
  btnLoginToggle: document.getElementById('btn-login-toggle'),
  btnRegisterToggle: document.getElementById('btn-register-toggle'),
  btnResetToggle: document.getElementById('btn-reset-toggle'),
  loginForm: document.getElementById('login-form'),
  registerForm: document.getElementById('register-form'),
  resetForm: document.getElementById('reset-form'),
  authPanel: document.getElementById('auth-panel'),
  studentPanel: document.getElementById('student-panel'),
  studentName: document.getElementById('student-name'),
  studentRole: document.getElementById('student-role'),
  studentClass: document.getElementById('student-class'),
  studentAverage: document.getElementById('student-average'),
  studentPoints: document.getElementById('student-points'),
  studentAttempts: document.getElementById('student-attempts'),
  moduleList: document.getElementById('module-list'),
  moduleDetail: document.getElementById('module-detail'),
  modulesStatus: document.getElementById('modules-status'),
  finalScreen: document.getElementById('final-screen'),
  logoutButton: document.getElementById('logout-button'),
  adminAuthPanel: document.getElementById('admin-auth-panel'),
  adminPanel: document.getElementById('admin-panel'),
  adminLoginForm: document.getElementById('admin-login-form'),
  adminName: document.getElementById('admin-name'),
  adminTotalStudents: document.getElementById('admin-total-students'),
  adminAverageTotal: document.getElementById('admin-average-total'),
  adminRankCount: document.getElementById('admin-rank-count'),
  adminFinalFlag: document.getElementById('admin-final-flag'),
  adminModuleSettings: document.getElementById('admin-module-settings'),
  adminAttemptLimit: document.getElementById('admin-attempt-limit'),
  adminUpdateAttempts: document.getElementById('admin-update-attempts'),
  adminSaveSettings: document.getElementById('admin-save-settings'),
  adminToggleFinal: document.getElementById('admin-toggle-final'),
  adminSendEmail: document.getElementById('admin-send-email'),
  adminExportJson: document.getElementById('admin-export-json'),
  adminExportPdf: document.getElementById('admin-export-pdf'),
  adminRankingList: document.getElementById('admin-ranking-list'),
  adminStudentList: document.getElementById('admin-student-list'),
  adminLogoutButton: document.getElementById('admin-logout-button'),
  btnAdminLoginToggle: document.getElementById('btn-admin-login-toggle'),
  btnAdminPanelToggle: document.getElementById('btn-admin-panel-toggle'),
  screenBlocker: document.getElementById('screen-blocker')
};

export function showSection(section) {
  const sections = [
    elements.loginForm,
    elements.registerForm,
    elements.resetForm,
    elements.studentPanel,
    elements.adminPanel,
    elements.adminAuthPanel
  ];
  sections.forEach((item) => item && item.classList.add('hidden'));
  section.classList.remove('hidden');
}

export function disableCheatTools() {
  document.addEventListener('copy', (event) => event.preventDefault());
  document.addEventListener('cut', (event) => event.preventDefault());
  document.addEventListener('paste', (event) => event.preventDefault());
  document.addEventListener('contextmenu', (event) => event.preventDefault());
  document.addEventListener('selectstart', (event) => event.preventDefault());
  document.addEventListener('keydown', (event) => {
    const forbidden = ['PrintScreen', 'F12', 'F11', 'F1'];
    const ctrl = event.ctrlKey || event.metaKey;
    if (forbidden.includes(event.key) || (ctrl && ['c', 'v', 'x', 'u', 's', 'p'].includes(event.key.toLowerCase()))) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      elements.screenBlocker.classList.remove('hidden');
    } else {
      setTimeout(() => elements.screenBlocker.classList.add('hidden'), 500);
    }
  });
  window.addEventListener('blur', () => elements.screenBlocker.classList.remove('hidden'));
  window.addEventListener('focus', () => setTimeout(() => elements.screenBlocker.classList.add('hidden'), 400));
}

function buildLessonSummary(lesson) {
  return `<small>Agenda: ${lesson.releaseDate} • Entrega: ${lesson.deadlineDate}</small>`;
}

export function buildModuleCard(module, userProgress, settings) {
  const moduleProgress = userProgress?.progress?.[module.id] || {};
  const completedLessons = Object.values(moduleProgress).filter((lesson) => lesson?.completed).length;
  const totalLessons = module.lessons.length;
  const attempts = Object.values(moduleProgress).reduce((sum, lesson) => sum + (lesson?.attempts || 0), 0);
  const remaining = Math.max((settings?.attemptLimit || 3) - attempts, 0);
  const card = document.createElement('article');
  card.className = 'module-card';
  card.innerHTML = `
    <div>
      <h3>${module.title}</h3>
      <p>${module.subtitle}</p>
      <p>${module.description}</p>
      <div class="badge badge-info">${completedLessons}/${totalLessons} aulas concluídas</div>
    </div>
    <div>
      <p><strong>Tentativas:</strong> ${remaining} restantes</p>
      <button class="button button-primary" data-module="${module.id}">Abrir módulo</button>
    </div>
  `;
  return card;
}

export function renderStudentDashboard(userData, modules, settings, calculateAverage) {
  elements.studentName.textContent = userData.name || 'Acadêmico';
  elements.studentRole.textContent = 'aluno';
  elements.studentClass.textContent = userData.class || '–';
  elements.studentPoints.textContent = userData.points || 0;
  elements.studentAverage.textContent = calculateAverage(userData) || 0;
  elements.studentAttempts.textContent = (settings.attemptLimit || 3) - (userData.totalAttempts || 0);

  elements.moduleList.innerHTML = '';
  modules.forEach((module) => {
    const card = buildModuleCard(module, userData, settings);
    elements.moduleList.appendChild(card);
  });
  elements.modulesStatus.textContent = `${modules.length} aulas - ${(userData.progress ? Object.keys(userData.progress).length : 0)} módulos registrados`;
}

export function renderExerciseInput(exercise, moduleId, lessonId) {
  const container = document.createElement('div');
  container.className = 'exercise-card';
  let inputHtml = '';
  if (exercise.type === 'radio' || exercise.type === 'checkbox') {
    const type = exercise.type;
    const options = exercise.options.map((option, index) => `
      <label>
        <input type="${type}" name="${moduleId}-${lessonId}-${exercise.id}" value="${index}" />
        <span>${option}</span>
      </label>
    `).join('');
    inputHtml = `<div class="exercise-options">${options}</div>`;
  } else {
    inputHtml = `<textarea class="exercise-input" rows="4" id="${moduleId}-${lessonId}-${exercise.id}-response" placeholder="${exercise.placeholder || 'Escreva sua resposta...'}"></textarea>`;
  }
  container.innerHTML = `
    <h4>${exercise.question}</h4>
    ${inputHtml}
    <button class="button button-primary exercise-submit" data-module="${moduleId}" data-lesson="${lessonId}" data-exercise="${exercise.id}">Enviar resposta</button>
    <p class="hint">Peso: ${exercise.weight} pontos.</p>
  `;
  return container;
}

function buildLessonCard(moduleId, lesson, userProgress, settings) {
  const lessonProgress = userProgress?.progress?.[moduleId]?.[lesson.id] || {};
  const completed = lessonProgress.completed || false;
  const card = document.createElement('article');
  card.className = 'exercise-card';
  card.innerHTML = `
    <div>
      <h3>${lesson.title}</h3>
      <p>${lesson.description}</p>
      <p>${buildLessonSummary(lesson)}</p>
      <div class="badge badge-info">${completed ? 'Concluída' : 'Aberta'}</div>
    </div>
  `;
  return card;
}

export function renderModuleDetail(module, userData, settings) {
  elements.moduleDetail.innerHTML = '';
  elements.moduleDetail.classList.remove('hidden');
  const header = document.createElement('div');
  header.innerHTML = `
    <h2>${module.title}</h2>
    <p>${module.description}</p>
    <div class="badge badge-info">Temas: ${module.topics.join(', ')}</div>
  `;
  elements.moduleDetail.appendChild(header);

  module.lessons.forEach((lesson) => {
    const lessonCard = buildLessonCard(module.id, lesson, userData, settings);
    elements.moduleDetail.appendChild(lessonCard);
    const lessonInfo = document.createElement('div');
    lessonInfo.innerHTML = `
      <iframe width="100%" height="300" src="${lesson.video}" title="Vídeo da aula" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
    elements.moduleDetail.appendChild(lessonInfo);
    lesson.exercises.forEach((exercise) => {
      elements.moduleDetail.appendChild(renderExerciseInput(exercise, module.id, lesson.id));
    });
  });
}

export function renderFinalScreen(userData, modules, settings, calculateAverage) {
  if (!elements.finalScreen) return;
  const allCompleted = modules.every((module) => module.lessons.every((lesson) => userData.progress?.[module.id]?.[lesson.id]?.completed));
  const released = settings.releaseFinal;
  if (allCompleted && released) {
    const average = calculateAverage(userData);
    elements.finalScreen.classList.remove('hidden');
    elements.finalScreen.innerHTML = `
      <h2>Parabéns, ${userData.name || 'acadêmico'}!</h2>
      <p>Você completou todos os módulos do aprendaweb com dedicação.</p>
      <div class="badge badge-success">Nota final: ${average}</div>
      <p>Seu histórico de desempenho foi registrado. Continue revisando para fixar o conhecimento.</p>
    `;
  } else {
    elements.finalScreen.classList.add('hidden');
    if (allCompleted && !released) {
      elements.finalScreen.classList.remove('hidden');
      elements.finalScreen.innerHTML = `
        <h2>Tudo pronto!</h2>
        <p>Você finalizou todas as aulas. A tela de parabenização ainda será liberada pelo administrador.</p>
      `;
    }
  }
}
