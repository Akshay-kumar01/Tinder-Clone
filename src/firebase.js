// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// add these import ^^
const firebaseConfig = {
    apiKey: "AIzaSyAyRxlWHga8FZrdlxX-mjc8x3kNrC1d6x8",
    authDomain: "tinder-clone-8a852.firebaseapp.com",
    projectId: "tinder-clone-8a852",
    storageBucket: "tinder-clone-8a852.appspot.com",
    messagingSenderId: "728196773171",
    appId: "1:728196773171:web:4eff68c16915648afd7a46"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebase.firestore();

  export default database;