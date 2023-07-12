import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCmyYVFQcOZyr9EE127r46accj4zItZB8c",
    authDomain: "cleancode-492ac.firebaseapp.com",
    databaseURL: "https://cleancode-492ac-default-rtdb.firebaseio.com",
    projectId: "cleancode-492ac",
    storageBucket: "cleancode-492ac.appspot.com",
    messagingSenderId: "116644753445",
    appId: "1:116644753445:web:c622a08689c053a7b50fcc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }