import firebase from '../../firebase/firebase-config'
import { profileActions } from './types'
export const getProfile = (userId) => {
  const firestore = firebase.firestore()
  return (dispatch) => {
    firestore.collection('users').doc(userId).onSnapshot((doc) => {
      dispatch({ type: profileActions.GET_PROFILE_SUCCESS, payload: doc.data() });
    }, (err) => {
      dispatch({ type: profileActions.ERROR, payload: err });
    });
  }
};