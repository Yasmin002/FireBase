import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDDFnbsTOslmvrXwZloGvPbY-IE0bgIv7s",
  authDomain: "projeto-79a10.firebaseapp.com",
  projectId: "projeto-79a10",
  storageBucket: "projeto-79a10.appspot.com",
  messagingSenderId: "314965147225",
  appId: "1:314965147225:web:c9a4d7df597583c1357b48",
}

if(!firebase.app.length == 0) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;