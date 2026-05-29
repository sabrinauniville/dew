import { auth, db, getUserDocRef, getModuleSettingsRef, getModuleContentRef, initModules, initSettings } from './firebase-service.js';
import { elements, showSection } from './ui.js';
import { calculateAverage } from './utils.js';
import { defaultSettings } from './data.js';

export async function loadAdminPanel(uid) {
  const settings = await initSettings(defaultSettings);
  window.platformSettings = settings;
  const modules = await initModules();
  window.currentModules = modules.length ? modules : [];
  const userSnap = await getUserDocRef(uid).get();
  const profile = userSnap.data();
  if (!profile || profile.role !== 'admin') {
    alert('Acesso negado. Conta sem permissão de administrador.');
    await auth.signOut();
    return showSection(elements.adminAuthPanel);
  }
  elements.adminName.textContent = profile.name || 'Admin';
  elements.adminTotalStudents.textContent = 'carregando...';
  elements.adminAverageTotal.textContent = 'carregando...';
  elements.adminFinalFlag.textContent = settings.releaseFinal ? 'Sim' : 'Não';
  elements.adminAttemptLimit.value = settings.attemptLimit || defaultSettings.attemptLimit;
  renderAdminSettings(window.currentModules, settings);
  await refreshAdminData();
  elements.adminAuthPanel.classList.add('hidden');
  elements.adminPanel.classList.remove('hidden');
}

export function renderAdminSettings(modules, settings) {
  elements.adminModuleSettings.innerHTML = '';
  modules.forEach((module) => {
    const section = document.createElement('div');
    section.className = 'admin-card';
    section.innerHTML = `
      <h3>${module.title}</h3>
      <label>Título
        <input type="text" class="admin-module-title" data-module="${module.id}" value="${module.title}" />
      </label>
      <label>Subtítulo
        <input type="text" class="admin-module-subtitle" data-module="${module.id}" value="${module.subtitle}" />
      </label>
      <label>Peso total do módulo
        <input type="number" class="admin-module-weight" data-module="${module.id}" value="${settings.weights[module.id] || 0}" min="10" />
      </label>
    `;
    elements.adminModuleSettings.appendChild(section);
  });
}

export function renderAdminRanking(ranking) {
  elements.adminRankingList.innerHTML = '';
  ranking.forEach((student, index) => {
    const item = document.createElement('div');
    item.className = 'rank-item';
    item.innerHTML = `<strong>#${index + 1} ${student.name}</strong><span>${student.points || 0} pts - ${student.class}</span>`;
    elements.adminRankingList.appendChild(item);
  });
}

export function renderAdminStudents(students) {
  elements.adminStudentList.innerHTML = '';
  students.forEach((student) => {
    const item = document.createElement('div');
    item.className = 'user-item';
    item.innerHTML = `
      <div>
        <strong>${student.name}</strong>
        <p>${student.email} • ${student.class} • ${student.university}</p>
      </div>
      <div>
        <p>${student.points || 0} pts</p>
        <p>${calculateAverage(student)} média</p>
      </div>
    `;
    elements.adminStudentList.appendChild(item);
  });
}

export async function refreshAdminData() {
  const usersQuery = await db.collection('users').get();
  const students = usersQuery.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const totalStudents = students.length;
  const average = totalStudents ? Math.round(students.reduce((acc, student) => acc + calculateAverage(student), 0) / totalStudents * 10) / 10 : 0;
  elements.adminTotalStudents.textContent = totalStudents;
  elements.adminAverageTotal.textContent = average;
  elements.adminRankCount.textContent = Math.min(totalStudents, 50);
  renderAdminRanking(students.sort((a, b) => (b.points || 0) - (a.points || 0)).slice(0, 10));
  renderAdminStudents(students);
}

export async function saveAdminSettings() {
  const updatedWeights = {};
  const moduleUpdates = [];
  elements.adminModuleSettings.querySelectorAll('.admin-card').forEach((section) => {
    const titleInput = section.querySelector('.admin-module-title');
    const subtitleInput = section.querySelector('.admin-module-subtitle');
    const weightInput = section.querySelector('.admin-module-weight');
    const moduleId = weightInput.dataset.module;
    updatedWeights[moduleId] = Number(weightInput.value) || 0;
    moduleUpdates.push({ id: moduleId, title: titleInput.value, subtitle: subtitleInput.value });
  });
  const attemptLimit = Number(elements.adminAttemptLimit.value) || defaultSettings.attemptLimit;
  await getModuleSettingsRef().set({ attemptLimit, weights: updatedWeights }, { merge: true });
  const moduleDocs = window.currentModules.map((module) => {
    const update = moduleUpdates.find((item) => item.id === module.id);
    return update ? { ...module, title: update.title, subtitle: update.subtitle } : module;
  });
  await getModuleContentRef().set({ modules: moduleDocs }, { merge: true });
  window.platformSettings = { ...window.platformSettings, attemptLimit, weights: updatedWeights };
  window.currentModules = moduleDocs;
  alert('Configurações salvas e conteúdo atualizado.');
}

export async function toggleFinalRelease() {
  const current = window.platformSettings?.releaseFinal || false;
  const next = !current;
  await getModuleSettingsRef().set({ releaseFinal: next }, { merge: true });
  window.platformSettings.releaseFinal = next;
  elements.adminFinalFlag.textContent = next ? 'Sim' : 'Não';
  alert(`Tela de parabenização ${next ? 'liberada' : 'bloqueada'}.`);
}

export async function updateGlobalAttempts() {
  const newLimit = Number(elements.adminAttemptLimit.value) || defaultSettings.attemptLimit;
  const snapshot = await db.collection('users').where('role', '==', 'student').get();
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.set(doc.ref, { attemptLimit: newLimit }, { merge: true });
  });
  await batch.commit();
  alert('Limite de tentativas atualizado para todos os acadêmicos.');
}

export async function exportBackupJson() {
  const snapshot = await db.collection('users').get();
  const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const backup = { generatedAt: new Date().toISOString(), users };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'aprendaweb-backup.json';
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function exportPdfContent() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const text = window.currentModules.map((mod, index) => `${index + 1}. ${mod.title}\n${mod.subtitle}\n${mod.description}\n`).join('\n');
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFontSize(12);
  const lines = doc.splitTextToSize(text, pageWidth - 72);
  doc.text(lines, 36, 40);
  doc.save('aprendaweb-conteudo.pdf');
}

export async function sendNotificationToStudents() {
  const message = prompt('Mensagem de aviso para todos os acadêmicos:');
  if (!message) return;
  await db.collection('platform').doc('notifications').set({
    lastEmailNotice: message,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  alert('Aviso salvo. Quando ativado, futuros serviços de email poderão enviar a notificação.');
}

export function bindAdminButtons() {
  if (elements.adminSaveSettings) {
    elements.adminSaveSettings.addEventListener('click', saveAdminSettings);
  }
  if (elements.adminToggleFinal) {
    elements.adminToggleFinal.addEventListener('click', toggleFinalRelease);
  }
  if (elements.adminUpdateAttempts) {
    elements.adminUpdateAttempts.addEventListener('click', updateGlobalAttempts);
  }
  if (elements.adminExportJson) {
    elements.adminExportJson.addEventListener('click', exportBackupJson);
  }
  if (elements.adminExportPdf) {
    elements.adminExportPdf.addEventListener('click', exportPdfContent);
  }
  if (elements.adminSendEmail) {
    elements.adminSendEmail.addEventListener('click', sendNotificationToStudents);
  }
}
