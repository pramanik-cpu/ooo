import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD_ubGKOsVYB1OWTBQLTpcJDVLzoc99xZ0",
    authDomain: "willyapp-ec751.firebaseapp.com",
    projectId: "willyapp-ec751",
    storageBucket: "willyapp-ec751.appspot.com",
    messagingSenderId: "705165788463",
    appId: "1:705165788463:web:f7970a671eca9ff8218dda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
