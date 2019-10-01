import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD-9VgqR_UATYJU_QUKKxi4nXZBre9NE-A",
  authDomain: "energy-cost.firebaseapp.com",
  databaseURL: "https://energy-cost.firebaseio.com",
  projectId: "energy-cost",
  storageBucket: "energy-cost.appspot.com",
  messagingSenderId: "309986051849",
  appId: "1:309986051849:web:361ed7fd6c57b9eba435d8",
  measurementId: "G-G21DJDKW90"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;

//  // Initialize firebase for firestore
//  var firebaseConfig = {
//   apiKey: "AIzaSyAZGjJNGJneL49L1bXtk8UrP29fw6qUuQ0",
//   authDomain: "energy-calculator-f4574.firebaseapp.com",
//   databaseURL: "https://energy-calculator-f4574.firebaseio.com",
//   projectId: "energy-calculator-f4574",
//   storageBucket: "energy-calculator-f4574.appspot.com",
//   messagingSenderId: "285897741898",
//   appId: "1:285897741898:web:e01799ebe8e1c79d85b8b3"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();

//   db.settings({ timestampsInSnapshots: true });

//   export default db;