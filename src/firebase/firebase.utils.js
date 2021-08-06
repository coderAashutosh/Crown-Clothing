import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmwNxtuC7efYOABI_AFsN3GAtKMamEb68",
    authDomain: "crown-clothing-6c599.firebaseapp.com",
    projectId: "crown-clothing-6c599",
    storageBucket: "crown-clothing-6c599.appspot.com",
    messagingSenderId: "916752208165",
    appId: "1:916752208165:web:95078bcd07805aecbdcacc",
    measurementId: "G-F6BY4PPGBM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;