// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ5Vm4zf3FyvL2AlzuS2SV23OdQ3FJVpM",
  authDomain: "waldo-314a7.firebaseapp.com",
  projectId: "waldo-314a7",
  storageBucket: "waldo-314a7.appspot.com",
  messagingSenderId: "210880546755",
  appId: "1:210880546755:web:912e108746163263739f76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
