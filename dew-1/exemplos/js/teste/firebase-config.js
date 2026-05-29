// Substitua com sua configuração do Firebase. Use plano gratuito e habilite Auth + Firestore.
const firebaseConfig = {
  apiKey: "SEU_API_KEY_AQUI",
  authDomain: "SEU_AUTH_DOMAIN.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT_ID.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
