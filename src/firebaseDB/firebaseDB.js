import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCV5Lrj7Te4lMGca3aze5Tqu-RnUT0dHbY",
    authDomain: "crud-7b1a0.firebaseapp.com",
    projectId: "crud-7b1a0",
    storageBucket: "crud-7b1a0.appspot.com",
    messagingSenderId: "832972979096",
    appId: "1:832972979096:web:a4597d20febcfac1f809ed"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();
