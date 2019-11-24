import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firebase-firestore'
const config = {
  apiKey: "AIzaSyAjWJo4Wt7YRIjMZJW6fEWIoLTDOiEyb48",
  authDomain: "spacex-82314.firebaseapp.com",
  databaseURL: "https://spacex-82314.firebaseio.com",
  projectId: "spacex-82314",
  storageBucket: "spacex-82314.appspot.com",
  messagingSenderId: "593009060272",
  appId: "1:593009060272:web:13d69a723c4fd7c4a18e75",
  measurementId: "G-ZYNLJG9YRP"
  };


class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
    this.firestore = app.firestore();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);


  // *** User API ***

  


  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;