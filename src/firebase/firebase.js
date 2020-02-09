import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBIjcgrUF2pAAknV-VQIA3_aO2mwWJghHA",
  authDomain: "crown-db-273d9.firebaseapp.com",
  databaseURL: "https://crown-db-273d9.firebaseio.com",
  projectId: "crown-db-273d9",
  storageBucket: "crown-db-273d9.appspot.com",
  messagingSenderId: "241118093012",
  appId: "1:241118093012:web:48b2144b19a402a4e8e541",
  measurementId: "G-3YNTYKSS4S"
};
// initialize config
firebase.initializeApp(config);

// setup auth
export const auth = firebase.auth();
// set up firestore db
export const firestore = firebase.firestore();

// create provide google sign in, twitter etc,
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

// make a modal pop of google sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export firebase to other component
export default firebase;
