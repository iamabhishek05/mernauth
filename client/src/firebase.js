// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-5a183.firebaseapp.com",
    projectId: "mern-auth-5a183",
    storageBucket: "mern-auth-5a183.appspot.com",
    messagingSenderId: "257809435345",
    appId: "1:257809435345:web:3a938aed17e0bbdbd413f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  