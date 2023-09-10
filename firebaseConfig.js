import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBKuM5kT4tMnYSUaICI-OQTFBTONLwdClU",
  authDomain: "todo-incentive.firebaseapp.com",
  databaseURL: "https://todo-incentive.firebaseio.com",
  projectId: "todo-incentive",
  storageBucket: "todo-incentive.appspot.com",
  messagingSenderId: "474887074959",
  appId: "1:474887074959:web:0c25f3b45f0e0762a6acfa",
  measurementId: "G-46B54FLCK7",
};

initializeApp(firebaseConfig);
export default getFirestore();
