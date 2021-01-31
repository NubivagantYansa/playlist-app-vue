import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAuCNsrDyeBJAysG8-98LxBj9oURRQKB0",
  authDomain: "playlist-app-ad04e.firebaseapp.com",
  projectId: "playlist-app-ad04e",
  storageBucket: "playlist-app-ad04e.appspot.com",
  messagingSenderId: "658927664620",
  appId: "1:658927664620:web:46e57517389bc078e0d4c9",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
