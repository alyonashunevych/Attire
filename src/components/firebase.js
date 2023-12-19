import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/compat/auth' //


const firebaseConfig = {
    apiKey: "AIzaSyBLfQPIPIZOZ4sl4cBJTUVEAux4veX4rxo",
    authDomain: "attire-b2bdb.firebaseapp.com",
    projectId: "attire-b2bdb",
    storageBucket: "attire-b2bdb.appspot.com",
    messagingSenderId: "659662932483",
    appId: "1:659662932483:web:0cc064404c15afd190dc36",
    measurementId: "G-GBBSCSM28Z"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, googleAuthProvider };
