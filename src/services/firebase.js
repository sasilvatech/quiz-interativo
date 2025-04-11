import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_QUIZ_API_KEY,
  authDomain: process.env.REACT_APP_QUIZ_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_QUIZ_PROJECT_ID,
  storageBucket: process.env.REACT_APP_QUIZ_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_QUIZ_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_QUIZ_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
