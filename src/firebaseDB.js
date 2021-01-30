import firebase from 'firebase';

// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCPb64lH9zWn9M86cW2tzVLB6lPB4SnHuU",
   authDomain: "crud-vue-77fdf.firebaseapp.com",
   databaseURL: "https://crud-vue-77fdf.firebaseio.com",
   projectId: "crud-vue-77fdf",
   storageBucket: "crud-vue-77fdf.appspot.com",
   messagingSenderId: "773604202735",
   appId: "1:773604202735:web:3cd838e71db81d6671a31a",
   measurementId: "G-KQNFL5XS38"
 };
 // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
