import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBzQhKKin12NnLtQGUtJdrofux2awqs2uo",
  authDomain: "glory-shop.firebaseapp.com",
  projectId: "glory-shop",
  storageBucket: "glory-shop.appspot.com",
  messagingSenderId: "1082999827703",
  appId: "1:1082999827703:web:f56359ee8d923bb8a077f2"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
