import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADWwHlQvFDLtlA_ruI06B-HgK8K_JGa8U",
  authDomain: "text3-e575c.firebaseapp.com",
  projectId: "text3-e575c",
  storageBucket: "text3-e575c.appspot.com",
  messagingSenderId: "397405219117",
  appId: "1:397405219117:web:76cc1943ba64f5aabccba4",
  measurementId: "G-R5ZTZB79RL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;