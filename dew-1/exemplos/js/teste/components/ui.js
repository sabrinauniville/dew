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
  studentAccepted: document.getElementById('student-accepted'),
  studentClass: document.getElementById('student-class'),
  studentAverage: document.getElementById('student-average'),
  studentPoints: document.getElementById('student-points'),
  studentAttempts: document.getElementById('student-attempts'),
  moduleList: document.getElementById('module-list'),
  moduleDetail: document.getElementById('module-detail'),
  modulesStatus: document.getElementById('modules-status'),
  finalScreen: document.getElementById('final-screen'),
  logoutButton: document.getElementById('logout-button'),
  loginProvider: document.getElementsByName('login-provider'),
  registerProvider: document.getElementsByName('register-provider'),
  loginProviderHint: document.getElementById('login-provider-hint'),
  registerProviderHint: document.getElementById('register-provider-hint'),
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
  adminStudentFilter: document.getElementById('admin-student-filter'),
  adminStudentPrev: document.getElementById('admin-student-prev'),
  adminStudentNext: document.getElementById('admin-student-next'),
  adminStudentPage: document.getElementById('admin-student-page'),
  adminLogoutButton: document.getElementById('admin-logout-button'),
  btnAdminLoginToggle: document.getElementById('btn-admin-login-toggle'),
  btnAdminPanelToggle: document.getElementById('btn-admin-panel-toggle'),
  screenBlocker: document.getElementById('screen-blocker')
};

export function showSection(section) {
  const sections = [
    elements.authPanel,
    elements.loginForm,
    elements.registerForm,
    elements.resetForm,
    elements.studentPanel,
    elements.adminPanel,
    elements.adminAuthPanel
  ];
  sections.forEach((item) => item && item.classList.add('hidden'));
  section.classList.remove('hidden');
  if ([elements.loginForm, elements.registerForm, elements.resetForm].includes(section)) {
    elements.authPanel.classList.remove('hidden');
  }
}

export function disableCheatTools() {
  function isLocalDev() {
    try {
      const host = window.location.hostname;
      return host === 'localhost' || host === '127.0.0.1' || window.location.protocol === 'file:';
    } catch (e) {
      return false;
    }
  }

  if (isLocalDev()) {
    console.info('Modo desenvolvimento detectado: bloqueios de tela e anti-cópia desativados.');
    return;
  }

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

  // Inactivity-based screen blocker: show after a period without user interaction
  const INACTIVITY_MS = 60 * 1000; // 60 seconds
  let inactivityTimer = null;
  const blocker = elements.screenBlocker;
  const defaultMessage = blocker ? blocker.innerHTML : '<div class="screen-blocker__message">Protegido contra cópia e captura de tela. Continue focado no aprendizado!</div>';

  function showBlocker(messageHtml) {
    if (!blocker) return;
    blocker.innerHTML = messageHtml || defaultMessage;
    blocker.classList.remove('hidden');
  }

  function hideBlocker() {
    if (!blocker) return;
    blocker.classList.add('hidden');
    blocker.innerHTML = defaultMessage;
  }

  function startInactivityTimer() {
    clearInactivityTimer();
    inactivityTimer = setTimeout(() => {
      const html = `
        <div class="screen-blocker__message">
          <p>Aprendizado pausado — confirme que você continua aí.</p>
          <button id="btn-continue-learning" class="button button-primary">Continuar</button>
        </div>
      `;
      showBlocker(html);
      const btn = document.getElementById('btn-continue-learning');
      if (btn) btn.addEventListener('click', () => {
        hideBlocker();
        startInactivityTimer();
      });
    }, INACTIVITY_MS);
  }

  function clearInactivityTimer() {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
      inactivityTimer = null;
    }
  }

  // Reset inactivity on user interactions
  ['click', 'scroll', 'mousemove', 'keydown', 'touchstart'].forEach((ev) => {
    window.addEventListener(ev, () => {
      startInactivityTimer();
      if (!blocker) return;
      // If blocker is visible because of visibilitychange or blur, don't auto-hide here
      if (!blocker.classList.contains('hidden')) return;
    }, { passive: true });
  });

  // Keep existing visibility/blur handlers but coordinate with inactivity
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      showBlocker();
      clearInactivityTimer();
    } else {
      setTimeout(() => hideBlocker(), 500);
      startInactivityTimer();
    }
  });
  window.addEventListener('blur', () => {
    showBlocker();
    clearInactivityTimer();
  });
  window.addEventListener('focus', () => {
    setTimeout(() => hideBlocker(), 400);
    startInactivityTimer();
  });

  // initialize
  startInactivityTimer();
}

export function initProviderHints() {
  // support both radio groups and select elements for provider hints
  function bindSelect(selectId, hintElement) {
    const sel = document.getElementById(selectId);
    if (!sel || !hintElement) return;
    sel.addEventListener('change', (e) => {
      if (e.target.value === 'outlook') hintElement.classList.remove('hidden');
      else hintElement.classList.add('hidden');
    });
    // initialize
    if (sel.value === 'outlook') hintElement.classList.remove('hidden');
    else hintElement.classList.add('hidden');
  }

  function bindRadios(radios, hintElement) {
    if (!radios || !hintElement) return;
    Array.from(radios).forEach((r) => {
      r.addEventListener('change', (e) => {
        if (e.target.value === 'outlook') hintElement.classList.remove('hidden');
        else hintElement.classList.add('hidden');
      });
    });
    const selected = Array.from(radios).find((r) => r.checked);
    if (selected && selected.value === 'outlook') hintElement.classList.remove('hidden');
    else hintElement.classList.add('hidden');
  }

  bindSelect('login-provider-select', elements.loginProviderHint);
  bindSelect('register-provider-select', elements.registerProviderHint);
  bindRadios(elements.loginProvider, elements.loginProviderHint);
  bindRadios(elements.registerProvider, elements.registerProviderHint);
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

import { formatDate } from '../utils/utils.js';

export function renderStudentDashboard(userData, modules, settings, calculateAverage) {
  elements.studentName.textContent = userData.name || 'Acadêmico';
  elements.studentRole.textContent = 'aluno';
  if (elements.studentAccepted) {
    if (userData.acceptedPrivacyAt) {
      const ts = userData.acceptedPrivacyAt;
      const iso = ts && ts.seconds ? new Date(ts.seconds * 1000).toISOString() : ts;
      elements.studentAccepted.textContent = `Aceite: ${formatDate(iso)}`;
    } else {
      elements.studentAccepted.textContent = '';
    }
  }
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
