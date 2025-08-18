// lib/firebaseClient.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuratio
const firebaseConfig = {
  apiKey: "AIzaSyBQ1zb-mS3aWOch8o3rrKhH1jhHS1q-4ko",
  authDomain: "herb-764fb.firebaseapp.com",
  projectId: "herb-764fb",
  storageBucket: "herb-764fb.firebasestorage.app",
  messagingSenderId: "964301497977",
  appId: "1:964301497977:web:53780ef043d6dd519f56a8"
};


// avoid re-initializing in Next.js
export const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);
