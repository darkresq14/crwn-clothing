import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTqaZONfoGiYL_Qp1Z_zCxJIV60MW0mdI",
    authDomain: "crwn-db-e2865.firebaseapp.com",
    projectId: "crwn-db-e2865",
    storageBucket: "crwn-db-e2865.appspot.com",
    messagingSenderId: "507762386500",
    appId: "1:507762386500:web:e48ba7eab9de216d72be11",
    measurementId: "G-9390B3Z5V1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;