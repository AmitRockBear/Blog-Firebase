import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "FILL",
  authDomain: "FILL",
  databaseURL: "FILL",
  projectId: "FILL",
  storageBucket: "FILL",
  messagingSenderId: "FILL",
  appId: "FILL",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
