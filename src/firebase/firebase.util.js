import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDlNwMsXHhxfrQTVjbHPIEc4Oo7PTrxDQE",
  authDomain: "crwn-clothing-ca53f.firebaseapp.com",
  projectId: "crwn-clothing-ca53f",
  storageBucket: "crwn-clothing-ca53f.appspot.com",
  messagingSenderId: "201406673007",
  appId: "1:201406673007:web:774799d9fa7c854fc01d9a",
  measurementId: "G-C0ZHX0ED59"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error occured', err.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;