// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmGMqZj-EzMn4iCsEaA0oolf_mo7HCVQ8",
  authDomain: "nextflix-app-1983b.firebaseapp.com",
  projectId: "nextflix-app-1983b",
  storageBucket: "nextflix-app-1983b.appspot.com",
  messagingSenderId: "774318239700",
  appId: "1:774318239700:web:8a44042a7dc7456e0b3041",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
