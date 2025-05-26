// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQ1zb-mS3aWOch8o3rrKhH1jhHS1q-4ko",
    authDomain: "herb-764fb.firebaseapp.com",
    projectId: "herb-764fb",
    storageBucket: "herb-764fb.firebasestorage.app",
    messagingSenderId: "964301497977",
    appId: "1:964301497977:web:53780ef043d6dd519f56a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
