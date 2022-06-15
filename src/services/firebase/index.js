import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8-nSAoTGUnPVtntMeW-mXPe-t1bs1d8o",
  authDomain: "ecommerce-coderhouse-6ab78.firebaseapp.com",
  projectId: "ecommerce-coderhouse-6ab78",
  storageBucket: "ecommerce-coderhouse-6ab78.appspot.com",
  messagingSenderId: "481055122716",
  appId: "1:481055122716:web:c049e73c88a40565a406d9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
