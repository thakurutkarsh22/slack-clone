// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7E0qagc7eEeUyonFu0MzXAsJ_yOWLNLM",
    authDomain: "slack-clone-ce0e4.firebaseapp.com",
    databaseURL: "https://slack-clone-ce0e4-default-rtdb.firebaseio.com",
    projectId: "slack-clone-ce0e4",
    storageBucket: "slack-clone-ce0e4.appspot.com",
    messagingSenderId: "257964335538",
    appId: "1:257964335538:web:436c2ed82425e86b65c4ab",
    measurementId: "G-3EFC9DVKQ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const dp = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db;
