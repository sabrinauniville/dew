export const auth = firebase.auth();
export const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

db.enablePersistence().catch(() => {
  console.warn('Offline persistence não disponível no navegador.');
});

export function getUserDocRef(uid) {
  return db.collection('users').doc(uid);
}

export function getModuleSettingsRef() {
  return db.collection('platform').doc('settings');
}

export function getModuleContentRef() {
  return db.collection('platform').doc('modules');
}

export async function initModules(defaultModules = []) {
  const snapshot = await getModuleContentRef().get();
  if (snapshot.exists) {
    const data = snapshot.data();
    return data.modules || defaultModules;
  }
  if (defaultModules.length) {
    await getModuleContentRef().set({ modules: defaultModules }, { merge: true });
  }
  return defaultModules;
}

export async function initSettings(defaultSettings = {}) {
  const settingsDoc = await getModuleSettingsRef().get();
  if (!settingsDoc.exists) {
    await getModuleSettingsRef().set(defaultSettings);
    return defaultSettings;
  }
  return { ...defaultSettings, ...settingsDoc.data() };
}
