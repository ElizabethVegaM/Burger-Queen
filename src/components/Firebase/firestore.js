import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDDh8d3HyP_IV7piRowsDGp61nNAjA5cs0',
  authDomain: 'lab-burger-queen.firebaseapp.com',
  databaseURL: 'https://lab-burger-queen.firebaseio.com',
  projectId: 'lab-burger-queen',
  storageBucket: 'lab-burger-queen.appspot.com',
  messagingSenderId: '629397015299',
};
firebase.initializeApp(config);

export default firebase;
