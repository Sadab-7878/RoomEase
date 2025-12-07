// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPj-zCWjcYBI-u4NKxET_71W1s5u_kH8",
  authDomain: "roomease-98247.firebaseapp.com",
  projectId: "roomease-98247",
  storageBucket: "roomease-98247.firebasestorage.app",
  messagingSenderId: "792554920572",
  appId: "1:792554920572:web:3613edd4abd777a47fc7f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);