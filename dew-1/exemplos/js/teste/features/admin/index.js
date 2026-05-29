import { auth, db, getUserDocRef, getModuleSettingsRef, getModuleContentRef, initModules, initSettings } from '../../services/firebase-service.js';
import { elements, showSection } from '../../components/ui.js';
import { calculateAverage } from '../../utils/utils.js';
import { defaultSettings } from '../../data/data.js';

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
        <div style="margin-top:0.6rem">
          <button class="button button-secondary admin-toggle-status" data-uid="${student.id}" data-status="${student.status || 'active'}">${student.status === 'blocked' ? 'Reativar' : 'Bloquear'}</button>
        </div>
      </div>
    `;
    elements.adminStudentList.appendChild(item);
  });
}

export async function toggleStudentStatus(uid, nextStatus) {
  await getUserDocRef(uid).set({ status: nextStatus }, { merge: true });
  // record audit
  try {
    await db.collection('adminActions').add({
      targetUid: uid,
      adminUid: auth.currentUser ? auth.currentUser.uid : null,
      action: nextStatus,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (err) {
    console.warn('Falha ao registrar auditoria:', err);
  }
  await refreshAdminData();
}

export async function refreshAdminData() {
  const usersQuery = await db.collection('users').get();
  const students = usersQuery.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // initialize paging/filter state
  window.adminStudentPage = window.adminStudentPage || 1;
  window.adminStudentFilter = window.adminStudentFilter || '';
  const pageSize = 10;

  // apply filter
  const filter = (window.adminStudentFilter || '').trim().toLowerCase();
  const filtered = students.filter((s) => {
    if (!filter) return true;
    return (s.name || '').toLowerCase().includes(filter) || (s.email || '').toLowerCase().includes(filter) || (s.class || '').toLowerCase().includes(filter);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (window.adminStudentPage > totalPages) window.adminStudentPage = totalPages;
  const start = (window.adminStudentPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);
  const totalStudents = students.length;
  const average = totalStudents ? Math.round(students.reduce((acc, student) => acc + calculateAverage(student), 0) / totalStudents * 10) / 10 : 0;
  elements.adminTotalStudents.textContent = totalStudents;
  elements.adminAverageTotal.textContent = average;
  elements.adminRankCount.textContent = Math.min(totalStudents, 50);
  renderAdminRanking(students.sort((a, b) => (b.points || 0) - (a.points || 0)).slice(0, 10));
  renderAdminStudents(pageItems);

  // update pagination UI
  if (elements.adminStudentPage) elements.adminStudentPage.textContent = `${window.adminStudentPage} / ${totalPages}`;

  // attach block/unblock controls
  elements.adminStudentList.querySelectorAll('.user-item').forEach((node) => {
    const id = node.querySelector('strong')?.textContent;
    // attempt to map name back to uid via students array
  });
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
  // pagination/filter controls
  if (elements.adminStudentFilter) {
    elements.adminStudentFilter.addEventListener('input', () => {
      window.adminStudentFilter = elements.adminStudentFilter.value || '';
      window.adminStudentPage = 1;
      refreshAdminData();
    });
  }
  if (elements.adminStudentPrev) {
    elements.adminStudentPrev.addEventListener('click', () => {
      window.adminStudentPage = Math.max(1, (window.adminStudentPage || 1) - 1);
      refreshAdminData();
    });
  }
  if (elements.adminStudentNext) {
    elements.adminStudentNext.addEventListener('click', () => {
      window.adminStudentPage = (window.adminStudentPage || 1) + 1;
      refreshAdminData();
    });
  }
  // delegate student block/reactivate
  if (elements.adminStudentList) {
    elements.adminStudentList.addEventListener('click', async (event) => {
      const btn = event.target.closest('.admin-toggle-status');
      if (!btn) return;
      const uid = btn.dataset.uid;
      const current = btn.dataset.status || 'active';
      const next = current === 'blocked' ? 'active' : 'blocked';
      const proceed = confirm(next === 'blocked' ? 'Confirma bloquear este acadêmico?' : 'Confirma reativar este acadêmico?');
      if (!proceed) return;
      try {
        await toggleStudentStatus(uid, next);
        alert('Status atualizado.');
      } catch (err) {
        console.error(err);
        alert('Erro ao atualizar status.');
      }
    });
  }
}
