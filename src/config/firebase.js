import firebase from "firebase/app"
import 'firebase/auth'
  var firebaseConfig = {
    apiKey: "AIzaSyBL0EmtzoeJ6qIxGIOLD5jI24hXAy5Ejsk",
    authDomain: "react-quizapp-c53dd.firebaseapp.com",
    databaseURL: "https://react-quizapp-c53dd.firebaseio.com",
    projectId: "react-quizapp-c53dd",
    storageBucket: "",
    messagingSenderId: "350877398995",
    appId: "1:350877398995:web:56b68d92209b691c"
  };
  
 let firebaseapp= firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.FacebookAuthProvider();
let providerApp = provider.setCustomParameters({'display':'popup'});
export {firebaseapp,providerApp}