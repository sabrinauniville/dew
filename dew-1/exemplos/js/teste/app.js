const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

db.enablePersistence().catch(() => {
  console.warn('Offline persistence não disponível no navegador.');
});

const moduleDefinitions = [
  {
    id: 'mod1',
    title: 'Introdução ao JavaScript e histórico',
    subtitle: 'Por que JS é essencial e como ele surgiu',
    description: 'Nesta aula você vai entender o papel do JavaScript no desenvolvimento web e conhecer tecnologias legadas importantes para projetos antigos.',
    video: 'https://www.youtube.com/embed/PkZNo7MFNFg',
    topics: ['História do JavaScript', 'DOM antigo & moderno', 'Boas práticas LGPD', 'Motivação para programação'],
    exercises: [
      {
        id: 'ex1',
        type: 'radio',
        question: 'JavaScript é usado principalmente para:',
        options: ['Criar o estilo visual de uma página', 'Controlar a lógica e interação da página', 'Gerenciar o banco de dados do servidor'],
        answer: 1,
        weight: 10
      },
      {
        id: 'ex2',
        type: 'text',
        question: 'Cite dois motivos para conhecer tecnologias antigas como jQuery ou DOM padrão.',
        placeholder: 'Resposta em poucas linhas...',
        answer: ['compatibilidade', 'manutenção', 'legado', 'trabalho em equipe'],
        weight: 15
      }
    ]
  },
  {
    id: 'mod2',
    title: 'Variáveis, tipos e controle de fluxo',
    subtitle: 'Como o JS organiza dados e decisões',
    description: 'Aprofunde-se em variáveis, tipos primitivos, estruturas condicionais e laços com exemplos práticos para sua primeira lógica.',
    video: 'https://www.youtube.com/embed/NCwa_xi0Uuc',
    topics: ['let/const/var', 'Tipos primitivos', 'if/else', 'loops for e while'],
    exercises: [
      {
        id: 'ex1',
        type: 'checkbox',
        question: 'Selecione as opções verdadeiras sobre variáveis em JavaScript.',
        options: ['const não pode ser reatribuída', 'var tem escopo de bloco', 'let evita hoisting prejudicial', 'undefined é atribuído automaticamente a variáveis não inicializadas'],
        answer: [0, 2, 3],
        weight: 15
      },
      {
        id: 'ex2',
        type: 'code',
        question: 'Qual será o valor impresso no console?\nlet a = 5; a += 3; console.log(a);',
        placeholder: 'Digite o valor correto...',
        answer: '8',
        weight: 10
      }
    ]
  },
  {
    id: 'mod3',
    title: 'Funções e estruturas de dados',
    subtitle: 'Criando blocos reutilizáveis e manipulando arrays',
    description: 'Explore funções, parâmetros, arrays e objetos. Inclui exercícios práticos que simulam decisões de projeto de software.',
    video: 'https://www.youtube.com/embed/ke3Z1O5EKB4',
    topics: ['funções nomeadas', 'arrays', 'objetos', 'spread e legado JSON'],
    exercises: [
      {
        id: 'ex1',
        type: 'radio',
        question: 'Qual estrutura permite armazenar pares chave-valor em JavaScript?',
        options: ['Array', 'Objeto', 'Set'],
        answer: 1,
        weight: 10
      },
      {
        id: 'ex2',
        type: 'text',
        question: 'Explique em uma frase como uma função ajuda a reduzir repetições no código.',
        placeholder: 'Resposta curta...',
        answer: ['reutilização', 'organização', 'manutenção'],
        weight: 15
      }
    ]
  },
  {
    id: 'mod4',
    title: 'DOM, eventos e interatividade',
    subtitle: 'Conecte o usuário à página com código.',
    description: 'Pratique a atualização da página com DOM e eventos, entendendo também como o legado do DOM padrão ainda é usado em projetos antigos.',
    video: 'https://www.youtube.com/embed/0ik6X4DJKCc',
    topics: ['querySelector', 'event listeners', 'formulários', 'manipulação de elementos'],
    exercises: [
      {
        id: 'ex1',
        type: 'radio',
        question: 'Qual método seleciona o primeiro elemento que coincide com um seletor CSS?',
        options: ['getElementById', 'querySelector', 'getElementsByClassName'],
        answer: 1,
        weight: 10
      },
      {
        id: 'ex2',
        type: 'text',
        question: 'Descreva o que acontece quando um usuário clica em um botão com event listener.',
        placeholder: 'Explique em até 2 linhas...',
        answer: ['executa', 'função', 'evento', 'resposta'],
        weight: 15
      }
    ]
  },
  {
    id: 'mod5',
    title: 'ES6 e código moderno com legados',
    subtitle: 'Novos recursos e como usá-los em projetos antigos.',
    description: 'Estude arrow functions, promises, fetch e exemplos de compatibilidade para trabalhar com código legado e moderno ao mesmo tempo.',
    video: 'https://www.youtube.com/embed/1W0dJm9e1EU',
    topics: ['arrow functions', 'promises', 'fetch', 'compatibilidade'],
    exercises: [
      {
        id: 'ex1',
        type: 'code',
        question: 'Qual a saída de:\nconst soma = (x, y) => x + y; console.log(soma(4, 7));',
        placeholder: 'Resposta...',
        answer: '11',
        weight: 15
      },
      {
        id: 'ex2',
        type: 'radio',
        question: 'Qual recurso do ES6 facilita promessas e requisições assíncronas?',
        options: ['callback', 'fetch', 'var'],
        answer: 1,
        weight: 10
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Aprendizado ativo, neurociência e carreira',
    subtitle: 'Como fixar conhecimento e usar JS em entrevistas.',
    description: 'Nesta aula você aprenderá métodos de estudo baseados em pesquisa nacional e internacional para jovens, além de aplicar esse aprendizado em exercícios práticos.',
    video: 'https://www.youtube.com/embed/8BNIGaH7tq0',
    topics: ['memória ativa', 'revisão espaçada', 'resolução de problemas', 'legado e carreira'],
    exercises: [
      {
        id: 'ex1',
        type: 'checkbox',
        question: 'Quais técnicas ajudam no aprendizado eficaz de programação?',
        options: ['Estudo passivo sem prática', 'Revisão com exercícios', 'Explicar para um colega', 'Só assistir vídeos sem testar'],
        answer: [1, 2],
        weight: 15
      },
      {
        id: 'ex2',
        type: 'text',
        question: 'Descreva brevemente como você usaria exercícios práticos para fixar JavaScript.',
        placeholder: 'Resposta...',
        answer: ['prática', 'projeto', 'revisão', 'errado'],
        weight: 15
      }
    ]
  }
];

const defaultSettings = {
  attemptLimit: 3,
  releaseFinal: false,
  weights: moduleDefinitions.reduce((obj, module) => {
    obj[module.id] = module.exercises.reduce((sum, ex) => sum + ex.weight, 0);
    return obj;
  }, {})
};

const elements = {
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

function showSection(section) {
  const sections = [elements.loginForm, elements.registerForm, elements.resetForm, elements.studentPanel, elements.adminPanel, elements.adminAuthPanel];
  sections.forEach((item) => item && item.classList.add('hidden'));
  section.classList.remove('hidden');
}

function disableCheatTools() {
  document.addEventListener('copy', (event) => event.preventDefault());
  document.addEventListener('cut', (event) => event.preventDefault());
  document.addEventListener('paste', (event) => event.preventDefault());
  document.addEventListener('contextmenu', (event) => event.preventDefault());
  document.addEventListener('selectstart', (event) => event.preventDefault());
  document.addEventListener('keydown', (event) => {
    const forbidden = ['PrintScreen', 'F12', 'F11', 'F1'];
    const ctrl = event.ctrlKey || event.metaKey;
    if (forbidden.includes(event.key) || ctrl && ['c', 'v', 'x', 'u', 's', 'p'].includes(event.key.toLowerCase())) {
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

disableCheatTools();

function getUserDocRef(uid) {
  return db.collection('users').doc(uid);
}

function getModuleSettingsRef() {
  return db.collection('platform').doc('settings');
}

function getModuleContentRef() {
  return db.collection('platform').doc('modules');
}

async function initModules() {
  const snapshot = await getModuleContentRef().get();
  if (snapshot.exists) {
    const data = snapshot.data();
    return data.modules || moduleDefinitions;
  }
  await getModuleContentRef().set({ modules: moduleDefinitions }, { merge: true });
  return moduleDefinitions;
}

async function initSettings() {
  const settingsDoc = await getModuleSettingsRef().get();
  if (!settingsDoc.exists) {
    await getModuleSettingsRef().set(defaultSettings);
    return defaultSettings;
  }
  return { ...defaultSettings, ...settingsDoc.data() };
}

function calculateAverage(userData) {
  if (!userData?.progress) return 0;
  const scored = Object.values(userData.progress).reduce((acc, entry) => acc + (entry.score || 0), 0);
  const weights = Object.values(userData.progress).reduce((acc, entry) => acc + (entry.weight || 0), 0);
  return weights ? Math.round((scored / weights) * 10) / 10 : 0;
}

function buildModuleCard(module, userProgress, settings) {
  const completed = userProgress?.[module.id]?.completed || false;
  const attempts = userProgress?.[module.id]?.attempts || 0;
  const remaining = Math.max((settings?.attemptLimit || defaultSettings.attemptLimit) - attempts, 0);
  const card = document.createElement('article');
  card.className = 'module-card';
  card.innerHTML = `
    <div>
      <h3>${module.title}</h3>
      <p>${module.subtitle}</p>
      <p>${module.description}</p>
      <div class="badge badge-info">${completed ? 'Concluído' : 'Em progresso'}</div>
    </div>
    <div>
      <p><strong>Tentativas:</strong> ${remaining} restantes</p>
      <button class="button button-primary" data-module="${module.id}">Abrir módulo</button>
    </div>
  `;
  return card;
}

function renderStudentDashboard(userData, modules, settings) {
  elements.studentName.textContent = userData.name || 'Acadêmico';
  elements.studentRole.textContent = 'aluno';
  elements.studentClass.textContent = userData.class || '–';
  elements.studentPoints.textContent = userData.points || 0;
  elements.studentAverage.textContent = calculateAverage(userData) || 0;
  elements.studentAttempts.textContent = (settings.attemptLimit || defaultSettings.attemptLimit) - (userData.totalAttempts || 0);

  const activeModules = modules.map((module) => buildModuleCard(module, userData.progress, settings));
  elements.moduleList.innerHTML = '';
  activeModules.forEach((card) => elements.moduleList.appendChild(card));

  elements.modulesStatus.textContent = `${modules.length} aulas - ${userData.progress ? Object.keys(userData.progress).length : 0} registradas`;
  renderFinalScreen(userData, modules, window.platformSettings);
}

function renderFinalScreen(userData, modules, settings) {
  if (!elements.finalScreen) return;
  const completedCount = modules.filter((module) => userData.progress?.[module.id]?.completed).length;
  const allCompleted = completedCount === modules.length;
  const released = settings.releaseFinal;
  if (allCompleted && released) {
    const average = calculateAverage(userData);
    elements.finalScreen.classList.remove('hidden');
    elements.finalScreen.innerHTML = `
      <h2>Parabéns, ${userData.name || 'acadêmico'}!</h2>
      <p>Você completou todos os módulos do aprendaweb com muita dedicação.</p>
      <div class="badge badge-success">Nota final: ${average}</div>
      <p>Seu histórico de desempenho foi registrado. Continue revisando para fixar o conhecimento.</p>
      <p>Mensagem: você agora compreende a lógica básica, o legado do JavaScript e os conceitos que aparecem em código legado e entrevistas reais.</p>
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

function highlightAdminControls() {
  if (!elements.adminPanel) return;
  elements.adminPanel.querySelectorAll('button').forEach((btn) => {
    if (btn.classList.contains('button-primary')) {
      btn.style.boxShadow = '0 0 0 1px rgba(93, 131, 255, 0.18)';
    }
  });
}

function cleanText(value) {
  return String(value || '').trim().toLowerCase();
}

function gradeAnswer(exercise, answerValue) {
  if (exercise.type === 'radio') {
    return Number(answerValue) === exercise.answer ? exercise.weight : 0;
  }
  if (exercise.type === 'checkbox') {
    const sanitizedSelection = Array.isArray(answerValue) ? answerValue.map(String).sort() : [];
    const expected = exercise.answer.map(String).sort();
    const equal = JSON.stringify(sanitizedSelection) === JSON.stringify(expected);
    return equal ? exercise.weight : 0;
  }
  if (exercise.type === 'text' || exercise.type === 'code') {
    const normalized = cleanText(answerValue);
    return exercise.answer.some((expected) => normalized.includes(cleanText(expected))) ? exercise.weight : 0;
  }
  return 0;
}

function renderExerciseInput(exercise, moduleId) {
  const container = document.createElement('div');
  container.className = 'exercise-card';
  let inputHtml = '';
  if (exercise.type === 'radio' || exercise.type === 'checkbox') {
    const type = exercise.type;
    const options = exercise.options.map((option, index) => `
      <label>
        <input type="${type}" name="${moduleId}-${exercise.id}" value="${index}" />
        <span>${option}</span>
      </label>
    `).join('');
    inputHtml = `<div class="exercise-options">${options}</div>`;
  } else {
    inputHtml = `<textarea class="exercise-input" rows="4" id="${moduleId}-${exercise.id}-response" placeholder="${exercise.placeholder || 'Escreva sua resposta...'}"></textarea>`;
  }
  container.innerHTML = `
    <h4>${exercise.question}</h4>
    ${inputHtml}
    <button class="button button-primary exercise-submit" data-module="${moduleId}" data-exercise="${exercise.id}">Enviar resposta</button>
    <p class="hint">Peso: ${exercise.weight} pontos.</p>
  `;
  return container;
}

function renderModuleDetail(module, userData, settings) {
  elements.moduleDetail.innerHTML = '';
  elements.moduleDetail.classList.remove('hidden');
  const header = document.createElement('div');
  header.innerHTML = `
    <h2>${module.title}</h2>
    <p>${module.description}</p>
    <iframe width="100%" height="300" src="${module.video}" title="Vídeo da aula" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="badge badge-info">Temas: ${module.topics.join(', ')}</div>
  `;
  elements.moduleDetail.appendChild(header);
  module.exercises.forEach((exercise) => {
    const exerciseCard = renderExerciseInput(exercise, module.id);
    elements.moduleDetail.appendChild(exerciseCard);
  });
}

async function updateUserProgress(uid, moduleId, exerciseId, score, weight) {
  const docRef = getUserDocRef(uid);
  const docSnap = await docRef.get();
  const data = docSnap.exists ? docSnap.data() : {};
  const progress = data.progress || {};
  const moduleProgress = progress[moduleId] || { attempts: 0, completed: false, score: 0, weight: 0 };
  moduleProgress.attempts = (moduleProgress.attempts || 0) + 1;
  moduleProgress.score = Math.max(moduleProgress.score, score);
  moduleProgress.weight = weight;
  moduleProgress.completed = true;
  moduleProgress.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  progress[moduleId] = moduleProgress;
  const totalPoints = Object.values(progress).reduce((sum, item) => sum + (item.score || 0), 0);
  const totalAttempts = (data.totalAttempts || 0) + 1;
  await docRef.set({ progress, points: totalPoints, totalAttempts }, { merge: true });
}

async function handleExerciseSubmit(button) {
  const moduleId = button.dataset.module;
  const exerciseId = button.dataset.exercise;
  const module = window.currentModules.find((mod) => mod.id === moduleId);
  const exercise = module.exercises.find((ex) => ex.id === exerciseId);
  const user = auth.currentUser;
  if (!user) return alert('Faça login antes de enviar respostas.');

  const currentModuleData = window.userData.progress?.[moduleId] || { attempts: 0 };
  const settings = window.platformSettings;
  if (currentModuleData.attempts >= (settings.attemptLimit || defaultSettings.attemptLimit)) {
    return alert('Limite de tentativas atingido para este módulo. Aguarde liberação do admin.');
  }

  let answerValue;
  if (exercise.type === 'radio') {
    const selected = elements.moduleDetail.querySelector(`input[name="${moduleId}-${exercise.id}"]:checked`);
    answerValue = selected ? selected.value : null;
  } else if (exercise.type === 'checkbox') {
    answerValue = Array.from(elements.moduleDetail.querySelectorAll(`input[name="${moduleId}-${exercise.id}"]:checked`)).map((input) => input.value);
  } else {
    answerValue = document.getElementById(`${moduleId}-${exercise.id}-response`).value;
  }
  const score = gradeAnswer(exercise, answerValue);
  await updateUserProgress(user.uid, moduleId, exerciseId, score, exercise.weight);
  alert(`Resposta salva. Pontuação: ${score}/${exercise.weight}`);
  await loadStudentData(user.uid);
  renderStudentDashboard(window.userData, window.currentModules, window.platformSettings);
}

async function loadStudentData(uid) {
  const snapshot = await getUserDocRef(uid).get();
  window.userData = snapshot.exists ? snapshot.data() : {};
}

async function loadStudentDashboard(uid) {
  const [modules, settings] = await Promise.all([initModules(), initSettings()]);
  window.currentModules = modules;
  window.platformSettings = settings;
  await loadStudentData(uid);
  renderStudentDashboard(window.userData, modules, settings);
}

function bindModuleButtons() {
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

async function signIn(email, password) {
  await auth.signInWithEmailAndPassword(email, password);
}

async function signUp(profile) {
  const result = await auth.createUserWithEmailAndPassword(profile.email, profile.password);
  const userDoc = getUserDocRef(result.user.uid);
  await userDoc.set({
    name: profile.name,
    email: profile.email,
    class: profile.class,
    semester: profile.semester,
    university: profile.university,
    age: profile.age,
    role: 'student',
    points: 0,
    totalAttempts: 0,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    progress: {}
  });
}

async function resetPassword(email) {
  await auth.sendPasswordResetEmail(email);
}

async function loadAdminPanel(uid) {
  const settings = await initSettings();
  window.platformSettings = settings;
  const modules = await initModules();
  window.currentModules = modules;
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
  renderAdminSettings(modules, settings);
  await refreshAdminData();
  elements.adminAuthPanel.classList.add('hidden');
  elements.adminPanel.classList.remove('hidden');
  highlightAdminControls();
}

function renderAdminSettings(modules, settings) {
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

function renderAdminRanking(ranking) {
  elements.adminRankingList.innerHTML = '';
  ranking.forEach((student, index) => {
    const item = document.createElement('div');
    item.className = 'rank-item';
    item.innerHTML = `<strong>#${index + 1} ${student.name}</strong><span>${student.points} pts - ${student.class}</span>`;
    elements.adminRankingList.appendChild(item);
  });
}

function renderAdminStudents(students) {
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

async function refreshAdminData() {
  const usersQuery = await db.collection('users').where('role', '==', 'student').get();
  const students = usersQuery.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const totalStudents = students.length;
  const average = totalStudents ? Math.round(students.reduce((acc, student) => acc + calculateAverage(student), 0) / totalStudents * 10) / 10 : 0;
  elements.adminTotalStudents.textContent = totalStudents;
  elements.adminAverageTotal.textContent = average;
  elements.adminRankCount.textContent = Math.min(totalStudents, 50);
  renderAdminRanking(students.sort((a, b) => (b.points || 0) - (a.points || 0)).slice(0, 10));
  renderAdminStudents(students);
}

async function saveAdminSettings() {
  const updatedWeights = {};
  const moduleUpdates = [];
  elements.adminModuleSettings.querySelectorAll('.admin-card').forEach((section) => {
    const titleInput = section.querySelector('.admin-module-title');
    const subtitleInput = section.querySelector('.admin-module-subtitle');
    const weightInput = section.querySelector('.admin-module-weight');
    const moduleId = weightInput.dataset.module;
    updatedWeights[moduleId] = Number(weightInput.value) || 0;
    moduleUpdates.push({
      id: moduleId,
      title: titleInput.value,
      subtitle: subtitleInput.value,
      weight: updatedWeights[moduleId]
    });
  });
  const attemptLimit = Number(elements.adminAttemptLimit.value) || defaultSettings.attemptLimit;
  await getModuleSettingsRef().set({ attemptLimit, weights: updatedWeights }, { merge: true });
  const moduleDocs = window.currentModules.map((module) => {
    const update = moduleUpdates.find((item) => item.id === module.id);
    if (update) {
      return { ...module, title: update.title, subtitle: update.subtitle };
    }
    return module;
  });
  await getModuleContentRef().set({ modules: moduleDocs }, { merge: true });
  window.platformSettings = { ...window.platformSettings, attemptLimit, weights: updatedWeights };
  window.currentModules = moduleDocs;
  alert('Configurações salvas e conteúdo atualizado.');
}

async function toggleFinalRelease() {
  const current = window.platformSettings?.releaseFinal || false;
  const next = !current;
  await getModuleSettingsRef().set({ releaseFinal: next }, { merge: true });
  window.platformSettings.releaseFinal = next;
  elements.adminFinalFlag.textContent = next ? 'Sim' : 'Não';
  alert(`Tela de parabenização ${next ? 'liberada' : 'bloqueada'}.`);
}

async function updateGlobalAttempts() {
  const newLimit = Number(elements.adminAttemptLimit.value) || defaultSettings.attemptLimit;
  const snapshot = await db.collection('users').where('role', '==', 'student').get();
  const updates = snapshot.docs.map((doc) => ({ ref: doc.ref, data: doc.data() }));
  const batch = db.batch();
  updates.forEach((item) => {
    batch.set(item.ref, { attemptLimit: newLimit }, { merge: true });
  });
  await batch.commit();
  alert('Limite de tentativas atualizado para todos os acadêmicos.');
}

async function exportBackupJson() {
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

async function exportPdfContent() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const text = moduleDefinitions.map((mod, index) => `${index + 1}. ${mod.title}\n${mod.subtitle}\n${mod.description}\n`).join('\n');
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFontSize(12);
  const lines = doc.splitTextToSize(text, pageWidth - 72);
  doc.text(lines, 36, 40);
  doc.save('aprendaweb-conteudo.pdf');
}

function initAuthStateListener() {
  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      if (window.location.pathname.includes('admin.html')) {
        showSection(elements.adminAuthPanel);
        elements.adminPanel.classList.add('hidden');
      } else {
        showSection(elements.loginForm);
        elements.authPanel.classList.remove('hidden');
        elements.studentPanel.classList.add('hidden');
      }
      return;
    }
    if (window.location.pathname.includes('admin.html')) {
      await loadAdminPanel(user.uid);
    } else {
      await loadStudentDashboard(user.uid);
      elements.authPanel.classList.add('hidden');
      elements.studentPanel.classList.remove('hidden');
    }
  });
}

function attachAuthHandlers() {
  if (elements.btnLoginToggle) {
    elements.btnLoginToggle.addEventListener('click', () => {
      showSection(elements.loginForm);
      elements.btnLoginToggle.classList.add('active');
      elements.btnRegisterToggle.classList.remove('active');
      elements.btnResetToggle.classList.remove('active');
    });
  }
  if (elements.btnRegisterToggle) {
    elements.btnRegisterToggle.addEventListener('click', () => {
      showSection(elements.registerForm);
      elements.btnRegisterToggle.classList.add('active');
      elements.btnLoginToggle.classList.remove('active');
      elements.btnResetToggle.classList.remove('active');
    });
  }
  if (elements.btnResetToggle) {
    elements.btnResetToggle.addEventListener('click', () => {
      showSection(elements.resetForm);
      elements.btnResetToggle.classList.add('active');
      elements.btnLoginToggle.classList.remove('active');
      elements.btnRegisterToggle.classList.remove('active');
    });
  }

  if (elements.loginForm) {
    elements.loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      await signIn(email, password);
    });
  }

  if (elements.registerForm) {
    elements.registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const profile = {
        name: document.getElementById('register-name').value,
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-password').value,
        university: document.getElementById('register-university').value,
        class: document.getElementById('register-class').value,
        semester: document.getElementById('register-semester').value,
        age: document.getElementById('register-age').value
      };
      await signUp(profile);
    });
  }

  if (elements.resetForm) {
    elements.resetForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('reset-email').value;
      await resetPassword(email);
      alert('Link de redefinição enviado para seu e-mail.');
    });
  }

  if (elements.logoutButton) {
    elements.logoutButton.addEventListener('click', async () => await auth.signOut());
  }

  if (elements.adminLoginForm) {
    elements.adminLoginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('admin-email').value;
      const password = document.getElementById('admin-password').value;
      await signIn(email, password);
    });
  }

  if (elements.adminLogoutButton) {
    elements.adminLogoutButton.addEventListener('click', async () => await auth.signOut());
  }

  if (elements.btnAdminLoginToggle) {
    elements.btnAdminLoginToggle.addEventListener('click', () => {
      showSection(elements.adminAuthPanel);
      elements.btnAdminLoginToggle.classList.add('active');
      elements.btnAdminPanelToggle.classList.remove('active');
    });
  }
  if (elements.btnAdminPanelToggle) {
    elements.btnAdminPanelToggle.addEventListener('click', () => {
      elements.adminAuthPanel.classList.add('hidden');
      elements.adminPanel.classList.remove('hidden');
      elements.btnAdminPanelToggle.classList.add('active');
      elements.btnAdminLoginToggle.classList.remove('active');
    });
  }

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

async function sendNotificationToStudents() {
  const message = prompt('Mensagem de aviso para todos os acadêmicos:');
  if (!message) return;
  await db.collection('platform').doc('notifications').set({
    lastEmailNotice: message,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  alert('Aviso salvo. Quando ativado, futuros serviços de email poderão enviar a notificação.');
}

async function initApp() {
  attachAuthHandlers();
  bindModuleButtons();
  initAuthStateListener();
}

initApp();
