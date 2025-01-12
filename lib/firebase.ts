import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKfi6SWDhY8CQOMESK5GXX_2Alrsio9Ms",
  authDomain: "walimarsvp-1d185.firebaseapp.com",
  projectId: "walimarsvp-1d185",
  storageBucket: "walimarsvp-1d185.firebasestorage.app",
  messagingSenderId: "371848956594",
  appId: "1:371848956594:web:452f3175f6e29aa44ed7ab",
  measurementId: "G-Z197435WM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
