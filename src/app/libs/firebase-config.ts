import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0p3SNCS1L_IXSEWvgL4kgdCUCZjvM6iE",
    authDomain: "bombeirospetrolina.firebaseapp.com",
    projectId: "bombeirospetrolina",
    storageBucket: "bombeirospetrolina.appspot.com",
    messagingSenderId: "1066903090722",
    appId:"1:1066903090722:web:ad8fd38c9c2db6786c3c7b",
    measurementId: "G-EDK2ZD3F75"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, signInWithEmailAndPassword}
