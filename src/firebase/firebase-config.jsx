import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfigs = {
    apiKey: "AIzaSyAr6QuHTkatVZ9dPfj9YbXBSGD1XTqUFGE",
    authDomain: "wikli-dev.firebaseapp.com",
    databaseURL: "https://wikli-dev.firebaseio.com",
    projectId: "wikli-dev",
    storageBucket: "wikli-dev.appspot.com",
    messagingSenderId: "489721199821",
    appId: "1:489721199821:web:b4af86a9d631a30bfe3d84",
    measurementId: "G-E422SW37NZ"
};
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigs)
}
firebase.firestore().enablePersistence()
  // .catch(function(err) {
  //     if (err.code == 'failed-precondition') {
  //         // Multiple tabs open, persistence can only be enabled
  //         // in one tab at a a time.
  //         // ...
  //     } else if (err.code == 'unimplemented') {
  //         // The current browser does not support all of the
  //         // features required to enable persistence
  //         // ...
  //     }
  // });
export default firebase;