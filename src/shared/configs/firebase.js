// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG8nAv8F2WLgLdZO2Y5nbOW-LWA_-qb2U",
  authDomain: "alemania-webapp.firebaseapp.com",
  projectId: "alemania-webapp",
  storageBucket: "alemania-webapp.appspot.com",
  messagingSenderId: "626099940561",
  appId: "1:626099940561:web:a40518d8cf848150c6a9f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
