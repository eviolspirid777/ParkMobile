// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMCsTdgP9Q7kUYghxN_XZ_L86R2vZNufA",
  authDomain: "parkmobiletest-95120.firebaseapp.com",
  projectId: "parkmobiletest-95120",
  storageBucket: "parkmobiletest-95120.firebasestorage.app",
  messagingSenderId: "650786722077",
  appId: "1:650786722077:web:446f6ff828ec73c314d1f4",
  measurementId: "G-PJ20PYS835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);