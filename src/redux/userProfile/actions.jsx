import firebase from '../../firebase/firebase-config'
import { profileActions } from './types'

/**
 * 
 * @param {string} userId 
 */
export const getProfile = (userId) => {
  const firestore = firebase.firestore()
  return (dispatch) => {
    firestore.collection('users').doc(userId).onSnapshot((doc) => {
      dispatch({
        type: profileActions.GET_PROFILE_SUCCESS,
        payload: { userId: userId, ...doc.data() 
        }
      });
    }, (err) => {
      dispatch({ type: profileActions.GET_PROFILE_SUCCESS, payload: err });
    });
  }
};


/**
 * 
 * @param {object} data 
 */
export const updateProfile = ({currentOrg, userId, field, value}) => {
  const firestore = firebase.firestore()
  let updateValue = field === 'projects' || field === 'orgs' ? firestore.FieldValue.arrayUnion(value) : value
  let orgId = currentOrg ? currentOrg : value.orgId
  return (dispatch) => {
    firestore.collection('users').doc(userId).update({
      currentOrg: orgId,
      [field]: updateValue
    }).then(() => {
      dispatch({ type: profileActions.UPDATE_PROFILE_SUCCESS});
    }).catch((err) => {
      dispatch({ type: profileActions.UPDATE_PROFILE_SUCCESS, payload: err });
    })
  }
};