import app from "firebase/app";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

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
    this.firestore = app.firestore();
    this.fieldValue = this.firestore.FieldValue;
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          //TODO
          .get()
          .then(snapshot => {
            //TODO
            const dbUser = snapshot.data();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });
  // *** User API ***
  id = () => this.auth.currentUser.uid;
  user = uid => this.firestore.doc(`UserData/${uid}`);

  users = () => this.db.collection("UserData");
}

export default Firebase;
