import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyB6ZD66QGMuar5nBiv5wQDTNnCYkOONj_Y",
    authDomain: "hackernews-c1967.firebaseapp.com",
    databaseURL: "https://hackernews-c1967.firebaseio.com",
    projectId: "hackernews-c1967",
    storageBucket: "hackernews-c1967.appspot.com",
    messagingSenderId: "283428142830",
    appId: "1:283428142830:web:4eeb312d3e2d074cd53dff",
    measurementId: "G-KS4RKGK44Y"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
