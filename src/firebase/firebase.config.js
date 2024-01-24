// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ovq8X2WS7nYLyDX-JYflTOuEZ0kpV90",
  authDomain: "fir-book-inventory-773e4.firebaseapp.com",
  projectId: "fir-book-inventory-773e4",
  storageBucket: "fir-book-inventory-773e4.appspot.com",
  messagingSenderId: "797632540741",
  appId: "1:797632540741:web:0efe573c726d7fad3cf32c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;