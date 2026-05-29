const routeRegistry = new Map();

export function registerRoute(path, config) {
  routeRegistry.set(path, config);
}

export function navigateTo(path) {
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }
  window.location.hash = path;
}

export function initRouter(defaultPath = '/login') {
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange(defaultPath);
}

function handleRouteChange(defaultPath) {
  const rawHash = window.location.hash.slice(1);
  const route = routeRegistry.get(rawHash) || routeRegistry.get(defaultPath);
  if (!route) {
    console.warn(`Rota não registrada: ${rawHash}`);
    return;
  }
  if (route.guard && !route.guard()) {
    if (route.fallback) {
      navigateTo(route.fallback);
    }
    return;
  }
  route.render();
}
