import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDHHFVAOQKPuqQxQhMTVEFbtTs5VMLZ40o",
  authDomain: "crwn-db-22a9d.firebaseapp.com",
  projectId: "crwn-db-22a9d",
  storageBucket: "crwn-db-22a9d.appspot.com",
  messagingSenderId: "992864964708",
  appId: "1:992864964708:web:0303358c603e0dd3154f71",
  measurementId: "G-SC73M2FM3T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
