// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjB_ex3sH7jjiY57CUyjR7lmpaw2Waflo",
  authDomain: "drumtiger-cbe37.firebaseapp.com",
  projectId: "drumtiger-cbe37",
  storageBucket: "drumtiger-cbe37.firebasestorage.app",
  messagingSenderId: "323868799166",
  appId: "1:323868799166:web:89b22297086b50ce80eeef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };