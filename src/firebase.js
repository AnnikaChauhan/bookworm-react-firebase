import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDV4ZY5h5-_wu1TADHn7FyWig4JPRIZlaA",
    authDomain: "bookwork-a6407.firebaseapp.com",
    databaseURL: "https://bookwork-a6407.firebaseio.com",
    projectId: "bookwork-a6407",
    storageBucket: "bookwork-a6407.appspot.com",
    messagingSenderId: "904012492169",
    appId: "1:904012492169:web:f53494ed3d772d0119c558"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;