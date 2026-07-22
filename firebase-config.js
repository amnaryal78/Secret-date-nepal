import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCivsIRM6Bx5t4fj8YvHIWIajJu7RoZvM",
  authDomain: "secret-date-nepal.firebaseapp.com",
  projectId: "secret-date-nepal",
  storageBucket: "secret-date-nepal.firebasestorage.app",
  messagingSenderId: "520835969835",
  appId: "1:520835969835:web:0aaa303cf8b965a907cb6e",
  measurementId: "G-78V2V28EW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
