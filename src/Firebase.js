import { getAuth } from "firebase/auth";
import "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export { db, auth, firebaseApp, getAuth };
