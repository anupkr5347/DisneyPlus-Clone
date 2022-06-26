import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc} from 'firebase/firestore/lite';
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDP_hFSB8cQVs45t4eBRSoIoCQ7iuNQ0uQ",
    authDomain: "disneyplus-clone-c8e23.firebaseapp.com",
    projectId: "disneyplus-clone-c8e23",
    storageBucket: "disneyplus-clone-c8e23.appspot.com",
    messagingSenderId: "781906672940",
    appId: "1:781906672940:web:aaa47a48e598c386e1c089",
    measurementId: "G-W7B1P6R2Q7"
  };



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // const auth = firebase.auth();
  const auth = getAuth();
  // const provider = new auth.GoogleAuthProvider(app);
  

  const provider = new GoogleAuthProvider();

  const storage = getStorage();
//   const analytics = getAnalytics(app);

export {auth, provider, storage};
export default db;