// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3t1BowgPfjT0iJg1PI4XbGRP7b8uI8X8",
  authDomain: "firestore-c2b2e.firebaseapp.com",
  projectId: "firestore-c2b2e",
  storageBucket: "firestore-c2b2e.firebasestorage.app",
  messagingSenderId: "620924019182",
  appId: "1:620924019182:web:bc035de7433db1f61aaeff",
  measurementId: "G-82KEX4MDSF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  db,
  storage,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  ref,
  uploadBytes,
  getDownloadURL,
};
