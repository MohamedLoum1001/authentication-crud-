// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "authentification-crud.firebaseapp.com",
  projectId: "authentification-crud",
  storageBucket: "authentification-crud.appspot.com",
  messagingSenderId: "72378174013",
  appId: "1:72378174013:web:229ff245b1c7acd105f854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
