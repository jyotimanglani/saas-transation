import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-chat-f28e0.firebaseapp.com",
  projectId: "next-chat-f28e0",
  storageBucket: "next-chat-f28e0.appspot.com",
  messagingSenderId: "255805564613",
  appId: "1:255805564613:web:6cc26861f96494f71ef2ac",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
