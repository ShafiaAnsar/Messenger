// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey:"AIzaSyBLvY7O4MgnbkVWqbT4yaaYhmUdqSK3HK8",
  authDomain: "messenger-b064a.firebaseapp.com",
  databaseURL:"https://messenger-b064a.firebaseio.com",
  projectId:"messenger-b064a",
  storageBucket: "messenger-b064a.appspot.com",
  messagingSenderId: "749771102057",
  appId:"1:749771102057:web:111263809255eda5d44ff8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =  getFirestore(app);
const storage = getStorage(app)
export {auth,db,storage}