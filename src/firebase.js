import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBpScExBeiCSsZJmabJdpS01swasg6aoJk",
  authDomain: "fun-food-friends-6254e.firebaseapp.com",
  databaseURL: "https://fun-food-friends-6254e.firebaseio.com",
  projectId: "fun-food-friends-6254e",
  storageBucket: "",
  messagingSenderId: "19433960985"
};

firebase.initializeApp(config);
export default firebase;
