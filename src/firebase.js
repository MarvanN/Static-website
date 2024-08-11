// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBS6MjLr2wQ3AWuvhqTkhIvuU7YvyIVl08",
    authDomain: "mbusiness-cad24.firebaseapp.com",
    projectId: "mbusiness-cad24",
    storageBucket: "mbusiness-cad24.appspot.com",
    messagingSenderId: "981036443375",
    appId: "1:981036443375:web:9357d23a36c6ccddcd5d1a",
    measurementId: "G-N6K0T7QD6E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
