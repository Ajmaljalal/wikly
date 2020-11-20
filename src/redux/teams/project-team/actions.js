import firebase from '../../firebase/firebase-config'
import { teamsActions } from './types'

const firestore = firebase.firestore()
const teamsCollection = firestore.collection('projects-teams')

/**
 * 
 * @param {string} projectId
 */
export const getProjectTeam = (projectId) => {
  return (dispatch) => {
    dispatch({
      type: teamsActions.GET_TEAMS_START,
    });
    teamsCollection.doc(projectId).collection('teams').onSnapshot((querySnapShot) => {
      const array = [];
      querySnapShot.forEach(doc => {
        const project = doc.data()
        array.push(project)
      })
      dispatch({
        type: teamsActions.GET_TEAMS_SUCCESS,
        payload: array
      });
    }, (err) => {
      dispatch({ type: teamsActions.GET_TEAMS_ERROR, payload: err });
    });
  }
};
