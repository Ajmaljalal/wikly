import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfigs = {

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
