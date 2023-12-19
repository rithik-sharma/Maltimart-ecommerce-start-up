import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzazz5TEKOEHW81TG1unvfb7bdW69eccU",
  authDomain: "maltimart-7c960.firebaseapp.com",
  projectId: "maltimart-7c960",
  storageBucket: "maltimart-7c960.appspot.com",
  messagingSenderId: "344372110594",
  appId: "1:344372110594:web:a12dec84c11712b8094e1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
