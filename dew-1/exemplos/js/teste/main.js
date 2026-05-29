import { auth } from './services/firebase-service.js';
import { attachAuthHandlers, bindAdminAuth, initAuthStateListener } from './features/auth/index.js';
import { bindModuleButtons, loadStudentDashboard } from './features/student/index.js';
import { bindAdminButtons } from './features/admin/index.js';
import { disableCheatTools, elements, showSection, initProviderHints } from './components/ui.js';
import { registerRoute, initRouter, navigateTo } from './components/router.js';

// Theme handling: default to light, allow toggle persisted in localStorage
const THEME_KEY = 'aprendaweb_theme';

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.classList.add('light-theme');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('light-theme');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '🌙';
  }
}

function initThemeToggle() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(saved);
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
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

function renderLogin() {
  showSection(elements.loginForm);
  setActiveAuthLink('/login');
}

function renderRegister() {
  showSection(elements.registerForm);
  setActiveAuthLink('/register');
}

function renderReset() {
  showSection(elements.resetForm);
  setActiveAuthLink('/reset');
}

async function renderDashboard() {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    navigateTo('/login');
    return;
  }
  showSection(elements.studentPanel);
  await loadStudentDashboard(currentUser.uid);
}

function initRoutes() {
  registerRoute('/login', {
    render: renderLogin,
    guard: () => !auth.currentUser,
    fallback: '/dashboard'
  });
  registerRoute('/register', {
    render: renderRegister,
    guard: () => !auth.currentUser,
    fallback: '/dashboard'
  });
  registerRoute('/reset', {
    render: renderReset,
    guard: () => !auth.currentUser,
    fallback: '/dashboard'
  });
  registerRoute('/dashboard', {
    render: renderDashboard,
    guard: () => !!auth.currentUser,
    fallback: '/login'
  });
}

function initApp() {
  disableCheatTools();
  initRoutes();
  initThemeToggle();
  initProviderHints();
  attachAuthHandlers();
  bindAdminAuth();
  bindAdminButtons();
  bindModuleButtons();
  initRouter('/login');
  initAuthStateListener();
}

initApp();
