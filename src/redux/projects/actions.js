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
    dispatch({
      type: projectsActions.GET_PROJECTS_START,
    });
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
      dispatch({ type: projectsActions.GET_PROJECTS_ERROR, payload: err });
    });
  }
};

export const setCurrentPorject = (project) => {
  return (dispatch) => {
      dispatch({
        type: projectsActions.SET_CURRENT_PROJECT_SUCCESS,
        payload: project
      });
    };
  };