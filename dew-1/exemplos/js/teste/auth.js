import { auth, getUserDocRef } from './firebase-service.js';
import { elements, showSection } from './ui.js';
import { loadStudentDashboard } from './student.js';
import { loadAdminPanel } from './admin.js';

export async function signIn(email, password) {
  await auth.signInWithEmailAndPassword(email, password);
}

export async function signUp(profile) {
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
    status: 'active',
    points: 0,
    totalAttempts: 0,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    progress: {}
  });
}

export async function resetPassword(email) {
  await auth.sendPasswordResetEmail(email);
}

function switchLoginPanel(panel) {
  const tabs = document.querySelectorAll('.login-tab');
  const providerPanel = document.getElementById('login-provider-panel');
  const credentialsPanel = document.getElementById('login-credentials-panel');
  if (!providerPanel || !credentialsPanel) return;
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.panel === panel));
  providerPanel.classList.toggle('hidden', panel !== 'provider');
  credentialsPanel.classList.toggle('hidden', panel !== 'credentials');
}

function initLoginTabs() {
  const tabs = document.querySelectorAll('.login-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => switchLoginPanel(tab.dataset.panel));
  });
  const providerButton = document.getElementById('provider-login-button');
  if (providerButton) {
    providerButton.addEventListener('click', () => {
      const providerSelect = document.getElementById('login-provider-select');
      const provider = providerSelect ? providerSelect.value : 'provider';
      const label = provider === 'outlook' ? 'Outlook (universitário)' : provider === 'gmail' ? 'Gmail' : 'Outro';
      alert(`Acesso via ${label} ainda não está disponível nesta versão. Use Email/Senha para entrar ou configure autenticação de provedor.`);
    });
  }

  const providerSelect = document.getElementById('login-provider-select');
  const providerHint = document.getElementById('login-provider-hint');
  function updateProviderHint(value) {
    if (!providerHint) return;
    if (value === 'outlook') {
      providerHint.textContent = 'Outlook universitário é o mesmo email usado para acessar o portal da Univille.';
    } else {
      providerHint.textContent = 'Escolha o provedor de email.';
    }
  }

  if (providerSelect) {
    providerSelect.addEventListener('change', (event) => updateProviderHint(event.target.value));
    updateProviderHint(providerSelect.value);
  }
}

export function attachAuthHandlers() {
  initLoginTabs();
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
}

export function bindAdminAuth() {
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
}

export function initAuthStateListener() {
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
