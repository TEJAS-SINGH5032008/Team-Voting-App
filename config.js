import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB_PuJRfyNCJufGd0HXV9yOp4AZH9hpuQA",
    authDomain: "voting-app-2-bc776.firebaseapp.com",
    projectId: "voting-app-2-bc776",
    storageBucket: "voting-app-2-bc776.appspot.com",
    messagingSenderId: "430755991574",
    appId: "1:430755991574:web:9616710ed05c5881d9a537"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();