// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwSydiGkEiHllGAcnRSnp-2Mt38ylvsdc",
  authDomain: "chinise-food.firebaseapp.com",
  projectId: "chinise-food",
  storageBucket: "chinise-food.appspot.com",
  messagingSenderId: "22772032335",
  appId: "1:22772032335:web:f76787fce6780eea2c1b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;