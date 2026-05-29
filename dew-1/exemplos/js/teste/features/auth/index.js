import { auth, getUserDocRef } from '../../services/firebase-service.js';
import { elements, showSection } from '../../components/ui.js';
import { navigateTo } from '../../components/router.js';
import { loadAdminPanel } from '../admin/index.js';
import { loadStudentDashboard } from '../student/index.js';

function hideAuthSections() {
  const sections = [elements.loginForm, elements.registerForm, elements.resetForm];
  sections.forEach((section) => section?.classList.add('hidden'));
}

function setActiveAuthLink(path) {
  const buttons = [elements.btnLoginToggle, elements.btnRegisterToggle, elements.btnResetToggle];
  buttons.forEach((button) => button?.classList.remove('active'));
  if (path === '/login') {
    elements.btnLoginToggle?.classList.add('active');
  }
  if (path === '/register') {
    elements.btnRegisterToggle?.classList.add('active');
  }
  if (path === '/reset') {
    elements.btnResetToggle?.classList.add('active');
  }
}

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
    acceptedPrivacyAt: firebase.firestore.FieldValue.serverTimestamp(),
    privacyVersion: 'v1.0',
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

function updateLoginProviderHint(value) {
  const hint = document.getElementById('login-provider-hint');
  if (!hint) return;
  if (value === 'outlook') {
    hint.textContent = 'Outlook universitário é o mesmo email usado para acessar o portal da Univille.';
  } else {
    hint.textContent = 'Escolha o provedor de email.';
  }
}

function initLoginTabs() {
  const tabs = document.querySelectorAll('.login-tab');
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => switchLoginPanel(tab.dataset.panel));
  });
}

function initLoginProviderHint() {
  const providerSelect = document.getElementById('login-provider-select');
  if (!providerSelect) return;
  providerSelect.addEventListener('change', (event) => updateLoginProviderHint(event.target.value));
  updateLoginProviderHint(providerSelect.value);
}

export function attachAuthHandlers() {
  initLoginTabs();
  initLoginProviderHint();
  if (elements.btnLoginToggle) {
    elements.btnLoginToggle.addEventListener('click', () => navigateTo('/login'));
  }
  if (elements.btnRegisterToggle) {
    elements.btnRegisterToggle.addEventListener('click', () => navigateTo('/register'));
  }
  if (elements.btnResetToggle) {
    elements.btnResetToggle.addEventListener('click', () => navigateTo('/reset'));
  }

  const openRegisterLink = document.getElementById('open-register-link');
  if (openRegisterLink) {
    openRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('/register');
    });
  }

  if (elements.loginForm) {
    elements.loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      await signIn(email, password);
      navigateTo('/dashboard');
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
      navigateTo('/dashboard');
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
    elements.logoutButton.addEventListener('click', async () => {
      await auth.signOut();
      navigateTo('/login');
    });
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
        navigateTo('/login');
      }
      return;
    }

    // fetch profile to validate role/status
    try {
      const doc = await getUserDocRef(user.uid).get();
      const profile = doc.exists ? doc.data() : null;
      if (!profile) {
        // no profile: sign out for safety
        await auth.signOut();
        return navigateTo('/login');
      }
      if (profile.status === 'blocked') {
        alert('Conta bloqueada pelo administrador. Entre em contato para mais informações.');
        await auth.signOut();
        return navigateTo('/login');
      }

      if (profile.role === 'admin' || window.location.pathname.includes('admin.html')) {
        await loadAdminPanel(user.uid);
      } else {
        await loadStudentDashboard(user.uid);
        navigateTo('/dashboard');
      }
    } catch (err) {
      console.error('Erro ao validar usuário:', err);
      await auth.signOut();
      navigateTo('/login');
    }
  });
}
