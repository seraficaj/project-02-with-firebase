import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDyEldzEMgN8NfyMo_KlOQHZHy5ym0nLYw",
  authDomain: "ga-project-02.firebaseapp.com",
  databaseURL: "https://ga-project-02.firebaseio.com",
  projectId: "ga-project-02",
  storageBucket: "ga-project-02.appspot.com",
  messagingSenderId: "1084444703097"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
    this.db = app.database();
  }

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