import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAK48hlJ5WhZyQK__MYSL2xQETZC41qeL8",
  authDomain: "budgetapp-4d37e.firebaseapp.com",
  projectId: "budgetapp-4d37e",
  storageBucket: "budgetapp-4d37e.firebasestorage.app",
  messagingSenderId: "235657049443",
  appId: "1:235657049443:web:681e2f41819a02c0eb8f56",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);