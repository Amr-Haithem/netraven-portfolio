import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVxOJID0-s0Vq_wN85XVOS0BbGij4x0VY",
    authDomain: "portfolio-support.firebaseapp.com",
    projectId: "portfolio-support",
    storageBucket: "portfolio-support.appspot.com",
    messagingSenderId: "970009079240",
    appId: "1:970009079240:web:0117a6cea0345b0de2e4fd"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
