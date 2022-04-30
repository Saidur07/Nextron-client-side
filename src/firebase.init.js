// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP9DaPS_89UVnVftQdbNSQjA8PBQneKFg",
  authDomain: "nextron-123.firebaseapp.com",
  projectId: "nextron-123",
  storageBucket: "nextron-123.appspot.com",
  messagingSenderId: "397253771567",
  appId: "1:397253771567:web:7ab5efa4dceaf3bf63a1da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
