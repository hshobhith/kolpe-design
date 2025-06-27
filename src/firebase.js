// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxQk6qKCULHXDdAJ1W1I2bwUlntZo0euk",
  authDomain: "kolpe-design.firebaseapp.com",
  projectId: "kolpe-design",
  storageBucket: "kolpe-design.appspot.com",
  messagingSenderId: "709362840693",
  appId: "1:709362840693:web:453516983cc52447cc743c",
  measurementId: "G-4F7XVVJLZX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
