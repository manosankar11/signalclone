import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDm7fZteEo7wWQfqmjn0u0_MD8VycapDSE",
    authDomain: "signal-clone-rn-4439e.firebaseapp.com",
    projectId: "signal-clone-rn-4439e",
    storageBucket: "signal-clone-rn-4439e.appspot.com",
    messagingSenderId: "117351541468",
    appId: "1:117351541468:web:30ed3816b1992519ba2219"
};
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)

} else {
    app = firebase.app();
}


const db = app.firestore();
const auth = firebase.auth();


export { db, auth };

