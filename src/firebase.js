// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export const firestore = getFirestore(app_f);
const storage = getStorage(app_f);

export default app_f; firestore; storage;