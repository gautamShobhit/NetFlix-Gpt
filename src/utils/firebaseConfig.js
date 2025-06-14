// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSuylyQD7gD7gUrN5qIm3MtfsXcFUgWf8",
  authDomain: "netflixgpt-27362.firebaseapp.com",
  projectId: "netflixgpt-27362",
  storageBucket: "netflixgpt-27362.firebasestorage.app",
  messagingSenderId: "506860750647",
  appId: "1:506860750647:web:c3ae0f5edc274d4fbebcb2",
  measurementId: "G-EVBBPK8WKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
