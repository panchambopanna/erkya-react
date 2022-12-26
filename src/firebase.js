// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1wCvXJB8X1Wroiq9yPRufXzS70DzDK8w",
  authDomain: "eryka-kreations.firebaseapp.com",
  projectId: "eryka-kreations",
  storageBucket: "eryka-kreations.appspot.com",
  messagingSenderId: "528473834505",
  appId: "1:528473834505:web:65e7ef7cec63939d1fe4d8",
  measurementId: "G-RPPNVSD4YK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
