import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMGWctJx0quJOgY7OPW_pq2uUSA1D3mJo",
  authDomain: "netflix-clone-6ddb8.firebaseapp.com",
  projectId: "netflix-clone-6ddb8",
  storageBucket: "netflix-clone-6ddb8.appspot.com",
  messagingSenderId: "64362957223",
  appId: "1:64362957223:web:367a38dd56d15095248e82",
  measurementId: "G-C1RT93EJ1Z",
});

const db = firebaseApp.firestore();

export { db };
