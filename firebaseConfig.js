// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAZtV59m8OO_ZRCgGXryz81l6_QXnJ6QI",
  authDomain: "file-upload-v1.firebaseapp.com",
  projectId: "file-upload-v1",
  storageBucket: "file-upload-v1.appspot.com",
  messagingSenderId: "870638608836",
  appId: "1:870638608836:web:bd9d9cdeff66b5cc300491"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);