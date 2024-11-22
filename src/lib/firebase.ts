import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDX4iV6JawqS0k_Zg4gfIPzXhtQwsG7Zss",
  authDomain: "builddivine.firebaseapp.com",
  projectId: "builddivine",
  storageBucket: "builddivine.firebasestorage.app",
  messagingSenderId: "550175690817",
  appId: "1:550175690817:web:c5d49630b0fbcd3f91b6c0",
  measurementId: "G-EX9JZGCF70"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;