// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdml16d3VhbfuQ4uulQ33UlDdh8vL2fn0",
  authDomain: "portfolio-79e38.firebaseapp.com",
  projectId: "portfolio-79e38",
  storageBucket: "portfolio-79e38.firebasestorage.app",
  messagingSenderId: "999371222627",
  appId: "1:999371222627:web:4e0f807c0ed950237a5256",
  measurementId: "G-71D62EKDPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);