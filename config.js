import * as firebase from 'firebase'
require('@firebase.firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDnRDX8YHsTW4pKZBL3UYI8ywCfruJ2YDc",
    authDomain: "booksantaapp-b0be7.firebaseapp.com",
    databaseURL: "https://booksantaapp-b0be7.firebaseio.com",
    projectId: "booksantaapp-b0be7",
    storageBucket: "booksantaapp-b0be7.appspot.com",
    messagingSenderId: "788775752277",
    appId: "1:788775752277:web:f6c1d58e961638ffc0fadc"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();