import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD_2CuMAYzJLecUUl3RUsl5_kWtzp3bdWo",
  authDomain: "crwn-db-697b5.firebaseapp.com",
  projectId: "crwn-db-697b5",
  storageBucket: "crwn-db-697b5.appspot.com",
  messagingSenderId: "27099218833",
  appId: "1:27099218833:web:4904357005e91557491030",
  measurementId: "G-G2FHJRWCXF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
