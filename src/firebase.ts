// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuU8Tn9n5tc305V7TW3kRIWYM1GcmaBlo",
  authDomain: "react-wallet-785c1.firebaseapp.com",
  databaseURL: "https://react-wallet-785c1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-wallet-785c1",
  storageBucket: "react-wallet-785c1.appspot.com",
  messagingSenderId: "33501790217",
  appId: "1:33501790217:web:4d03bbeebaaf471aed78d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
