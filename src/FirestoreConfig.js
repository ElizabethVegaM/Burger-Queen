import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

var config = {
    apiKey: "AIzaSyC1FYcyypn7TpG1RtvoiWF5CLtWdt0rl7k",
    authDomain: "mymenu-7db0e.firebaseapp.com",
    databaseURL: "https://mymenu-7db0e.firebaseio.com",
    projectId: "mymenu-7db0e",
    storageBucket: "mymenu-7db0e.appspot.com",
    messagingSenderId: "348562786338"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
