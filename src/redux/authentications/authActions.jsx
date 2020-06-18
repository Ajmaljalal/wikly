import firebase from '../../firebase/firebase-config'
export const signIn = (credentials) => {
  return (dispatch, getState) => {
      firebase.login(
        credentials
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState) => {
      firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  
  export const signUp = (newUser) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      firebase.auth().createUserWithEmailAndPassword(
        newUser.Email, 
        newUser.Password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.FirstName,
          lastName: newUser.LastName,
          initials: newUser.FirstName[0] + newUser.LastName[0],
          currentOrg: null,
          orgs: [],
          projects: []
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }