import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDtY6cOPdQH_GdoKU9_PBTzX9de3Gli9OQ",
    authDomain: "slack-clone-v2-4e0e6.firebaseapp.com",
    projectId: "slack-clone-v2-4e0e6",
    storageBucket: "slack-clone-v2-4e0e6.appspot.com",
    messagingSenderId: "49297428724",
    appId: "1:49297428724:web:571cd23e3128e9dafd4ea1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider, db };