import firebase from 'firebase';
import '@firebase/firestore'; // 👈 If you're using firestore

var config = {
    apiKey: "AIzaSyCmEGZ9Qnakb836bkItk9ugXZdU1jtBswo",
    authDomain: "minicursoiftech.firebaseapp.com",
    databaseURL: "https://minicursoiftech.firebaseio.com",
    projectId: "minicursoiftech",
    storageBucket: "minicursoiftech.appspot.com",
    messagingSenderId: "705242705330"
};

export const myFirebaseApp  = firebase.initializeApp(config);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true});

export {
    auth,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    firestore,
}
