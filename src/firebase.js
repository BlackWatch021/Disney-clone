import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8qLnMCgcj6TXUipwf5515bf_nxo5CBC0",
    authDomain: "disneyplus-clone-11e09.firebaseapp.com",
    projectId: "disneyplus-clone-11e09",
    storageBucket: "disneyplus-clone-11e09.appspot.com",
    messagingSenderId: "461988262259",
    appId: "1:461988262259:web:98c172c2befa986dec5506",
    measurementId: "G-SLVQNZE4K9"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;