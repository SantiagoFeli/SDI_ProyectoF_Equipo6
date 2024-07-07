// Import the functions you need from the SDKs you need
// Corrected exports in firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6R2asZLMMudDYEb-lp1pGjIgPoOQrATo",
  authDomain: "sdi-proyectof-equipo6.firebaseapp.com",
  projectId: "sdi-proyectof-equipo6",
  storageBucket: "sdi-proyectof-equipo6.appspot.com",
  messagingSenderId: "153609015992",
  appId: "1:153609015992:web:e354e2a0ecc029efddda4d"
};

// Initialize Firebase
const app_f = initializeApp(firebaseConfig);

// Correctly export using named exports
export const db = getFirestore(app_f); // Assuming you want to use 'db' as the name when importing
export const storage = getStorage(app_f);
export const auth = getAuth(app_f);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
googleProvider.addScope('profile');
googleProvider.addScope('email');

// If you need a default export, choose what's most appropriate to be the default
export default app_f;