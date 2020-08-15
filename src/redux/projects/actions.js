import firebase from '../../firebase/firebase-config'
import { projectsActions } from './types'

const firestore = firebase.firestore()
const projectsCollection = firestore.collection('orgs-projects')

/**
 * 
 * @param {string} orgId 
 */
export const getProjects = (orgId) => {
  return (dispatch) => {
    projectsCollection.doc(orgId).collection('projects').onSnapshot((querySnapShot) => {
        const array = [];
        querySnapShot.forEach(doc => {
          const project = {...doc.data(), projectId: doc.id}
          array.push(project)
        })
      dispatch({
        type: projectsActions.GET_PROJECTS_SUCCESS,
        payload: array
      });
    }, (err) => {
      dispatch({ type: projectsActions.GET_PROJECTS_SUCCESS, payload: err });
    });
  }
};