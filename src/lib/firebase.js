import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcm-a_Ru2JkAUJh2JpFaD1aDu0epNBsjI",
  authDomain: "book-list-384be.firebaseapp.com",
  projectId: "book-list-384be",
  storageBucket: "book-list-384be.appspot.com",
  messagingSenderId: "195335330449",
  appId: "1:195335330449:web:d2bc48cfb4ff7cbd303d30"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
