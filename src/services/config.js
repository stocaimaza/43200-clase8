import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "supermercado-marolio.firebaseapp.com",
  projectId: "supermercado-marolio",
  storageBucket: "supermercado-marolio.appspot.com",
  messagingSenderId: "259909973686",
  appId: "1:259909973686:web:416b419155f84188b59817"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);