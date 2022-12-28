// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnj24XJSFrGe-pkBbpaIg5N5JDCLAoTjQ",
  authDomain: "eryka-react.firebaseapp.com",
  projectId: "eryka-react",
  storageBucket: "eryka-react.appspot.com",
  messagingSenderId: "935834851563",
  appId: "1:935834851563:web:60c37999d7c641e0a6c6ae",
  measurementId: "G-H7Z55H7FPN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
