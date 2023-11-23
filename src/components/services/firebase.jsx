import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "ecommerce-react---coderhouse.firebaseapp.com",
    projectId: "ecommerce-react---coderhouse",
    storageBucket: "ecommerce-react---coderhouse.appspot.com",
    messagingSenderId: "1012296411034",
    appId: "1:1012296411034:web:25c58a78c1b1308e66bc23"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
