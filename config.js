import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCfSrx7iKyADyBXHwgejxyGJ7LU6ErAEGs",
    authDomain: "bartersystem-bc937.firebaseapp.com",
    databaseURL: 'https://bartersystem-bc937.firebaseio.com',
    projectId: "bartersystem-bc937",
    storageBucket: "bartersystem-bc937.appspot.com",
    messagingSenderId: "895756245067",
    appId: "1:895756245067:web:4f1b3133cd5739273955ce"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore;
