import { getAuth } from "firebase/auth";
import "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJOBY8dpbZpKkw4ChFyu1W96demeAvtY",
  authDomain: "e-clone-5035e.firebaseapp.com",
  projectId: "e-clone-5035e",
  storageBucket: "e-clone-5035e.appspot.com",
  messagingSenderId: "376758024713",
  appId: "1:376758024713:web:c15040a9af9886647e56d8",
  measurementId: "G-KEKTDXDEG3",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export { db, auth, firebaseApp, getAuth };
