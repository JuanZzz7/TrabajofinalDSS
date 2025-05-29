// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYEC-WMZzT1Ux7qVujRQYqP3uNerVpbPU",
  authDomain: "proyectofinal-819e9.firebaseapp.com",
  projectId: "proyectofinal-819e9",
  storageBucket: "proyectofinal-819e9.firebasestorage.app",
  messagingSenderId: "875135596600",
  appId: "1:875135596600:web:bf2718138189fda1238ecd",
  measurementId: "G-WJGT5DE3ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);