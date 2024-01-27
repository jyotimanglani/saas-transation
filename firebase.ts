
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH0Qs5Dtg0voz1jMcQaYCdRLQ_UQpWzHo",
  authDomain: "next-chat-f28e0.firebaseapp.com",
  projectId: "next-chat-f28e0",
  storageBucket: "next-chat-f28e0.appspot.com",
  messagingSenderId: "255805564613",
  appId: "1:255805564613:web:6cc26861f96494f71ef2ac"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);