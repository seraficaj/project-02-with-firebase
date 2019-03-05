import app from 'firebase/app'

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
  }
}

export default Firebase;