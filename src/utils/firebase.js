// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN9VIGj9t_0j7MP_HAgf-rB_pfPpamUvM",
  authDomain: "netflixgpt-c769d.firebaseapp.com",
  projectId: "netflixgpt-c769d",
  storageBucket: "netflixgpt-c769d.appspot.com",
  messagingSenderId: "16456623496",
  appId: "1:16456623496:web:c5ee4ba6a46b59da8f063d",
  measurementId: "G-10CKT0YDCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();