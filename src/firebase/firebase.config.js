// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjystO8BZzoQ5gOsGKeRxVKsOwsiWR8_A",
  authDomain: "auth-all-together.firebaseapp.com",
  projectId: "auth-all-together",
  storageBucket: "auth-all-together.appspot.com",
  messagingSenderId: "744473351424",
  appId: "1:744473351424:web:344c1c001efb719377cfe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
