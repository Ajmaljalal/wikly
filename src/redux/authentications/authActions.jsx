import firebase from '../../firebase/firebase-config'
const firestore = firebase.firestore()
export const signIn = (credentials) => {
  return (dispatch) => {
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERSROR', err });
      });
    }
  }
  
  export const signOut = () => {
    return (dispatch) => {
      firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  
  export const signUp = (newUser) => {
    return (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword(
        newUser.Email, 
        newUser.Password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          name: `${newUser.FirstName} ${newUser.LastName}`,
          initials: newUser.FirstName[0] + newUser.LastName[0],
          currentOrg: null,
          orgs: [],
          projects: [],
          email: newUser.Email,
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }