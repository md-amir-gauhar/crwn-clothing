import firebase from 'firebase/app';
// import 'firebase/firestore';
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

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;