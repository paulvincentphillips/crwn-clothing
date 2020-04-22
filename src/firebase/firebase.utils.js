import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOuJz-BTnmihL4olk-D0UAJxV-yhOr7k0",
  authDomain: "crwn-db-2ee15.firebaseapp.com",
  databaseURL: "https://crwn-db-2ee15.firebaseio.com",
  projectId: "crwn-db-2ee15",
  storageBucket: "crwn-db-2ee15.appspot.com",
  messagingSenderId: "805475017727",
  appId: "1:805475017727:web:d0a9214dee2c7fc9ec3dca",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
