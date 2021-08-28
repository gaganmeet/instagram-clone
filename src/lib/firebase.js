import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDmGfvR9Pv6hYQemzPpna90pecTSyA1uLk",
  authDomain: "instagram-clone-fc2ee.firebaseapp.com",
  projectId: "instagram-clone-fc2ee",
  storageBucket: "instagram-clone-fc2ee.appspot.com",
  messagingSenderId: "822058829662",
  appId: "1:822058829662:web:ec1a1e32683c3451a331cf",
  measurementId: "G-VWYE5F3KFM",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
console.log(firebase);
export { firebase };
