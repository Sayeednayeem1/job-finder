// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_Ip-U81OyqmnFRHYG8DsI1ZGaPF9pgPo",
    authDomain: "job-finder-f724e.firebaseapp.com",
    projectId: "job-finder-f724e",
    storageBucket: "job-finder-f724e.appspot.com",
    messagingSenderId: "1087654198241",
    appId: "1:1087654198241:web:c2ab6f56cce5f92f58b0a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;