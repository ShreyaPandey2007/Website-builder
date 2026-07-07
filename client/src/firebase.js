// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "genwebai-ce164.firebaseapp.com",
  projectId: "genwebai-ce164",
  storageBucket: "genwebai-ce164.firebasestorage.app",
  messagingSenderId: "448469929839",
  appId: "1:448469929839:web:3821641622fe212326629a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}