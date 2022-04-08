// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2qUgCMImZqzP7DsTVTHRmL7cbokutzXk",
  authDomain: "medicalrecordsonblockchain.firebaseapp.com",
  projectId: "medicalrecordsonblockchain",
  storageBucket: "medicalrecordsonblockchain.appspot.com",
  messagingSenderId: "783004218964",
  appId: "1:783004218964:web:7c1558d1db740cbf59dfc1",
  measurementId: "G-01202TGFBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
