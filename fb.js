import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAQqhRx8rnv74FdzZL9ZQDJdXrtoUvuF40",
  authDomain: "steamproject-7a681.firebaseapp.com",
  databaseURL: "https://steamproject-7a681-default-rtdb.firebaseio.com",
  projectId: "steamproject-7a681",
  storageBucket: "steamproject-7a681.appspot.com",
  messagingSenderId: "780006826840",
  appId: "1:780006826840:web:d0a4f284fbab5e7f9ffb2d"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase