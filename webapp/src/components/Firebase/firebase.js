import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyCaiK8Te6AZPKwqAHdoiVH42UghP69nlXk",
    authDomain: "avanrent0.firebaseapp.com",
    databaseURL: "https://avanrent0.firebaseio.com",
    projectId: "avanrent0",
    storageBucket: "avanrent0.appspot.com",
    messagingSenderId: "853943617196",
    appId: "1:853943617196:web:81c1446bf53c8311"
  };


class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
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