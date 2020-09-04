import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCxdfNOOXEaKZI68DXriDVsd3FZhPTaYtg",
    authDomain: "my-first-react-firebase-eeb91.firebaseapp.com",
    databaseURL: "https://my-first-react-firebase-eeb91.firebaseio.com",
    projectId: "my-first-react-firebase-eeb91",
    storageBucket: "my-first-react-firebase-eeb91.appspot.com",
    messagingSenderId: "241489210888",
    appId: "1:241489210888:web:9487985e4aa03fc403abbd",
    measurementId: "G-45G9ZEB5VR"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase