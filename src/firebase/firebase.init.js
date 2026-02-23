// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SG4m6KieXwJ8KhLp7URdgVAL7xU6AWI",
  authDomain: "espresso-emporium-ace5c.firebaseapp.com",
  projectId: "espresso-emporium-ace5c",
  storageBucket: "espresso-emporium-ace5c.firebasestorage.app",
  messagingSenderId: "842443441785",
  appId: "1:842443441785:web:aa182ed8fe525d86bb36a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);