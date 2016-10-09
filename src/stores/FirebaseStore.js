import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAYVeIi0YU1F9a_6cMHXT1opZCUkAw0OSY",
    authDomain: "todoapp-58dd3.firebaseapp.com",
    databaseURL: "https://todoapp-58dd3.firebaseio.com",
    storageBucket: "todoapp-58dd3.appspot.com",
    messagingSenderId: "398431465546"};

firebase.initializeApp(config);
const db = firebase.database()

const root = db.ref()
const todos = db.ref('todos')
   
const fbstore = {
    root,
    todos
}

export {fbstore}
