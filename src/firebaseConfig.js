// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqKMSNKp63pFZLnuiJ99XwxFLOwb6TC6A",
  authDomain: "exclusive-7ead1.firebaseapp.com",
  projectId: "exclusive-7ead1",
  storageBucket: "exclusive-7ead1.appspot.com",
  messagingSenderId: "280004439166",
  appId: "1:280004439166:web:661fb2aa9f02301233bc2f",
  measurementId: "G-PP8ZR91NNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics }