// import moment from 'moment'
import firebase from '../../firebase/firebase-config'
import { uuid } from '../../helpers/uuid'
import { OrgActionTypes } from './types'
const firestore = firebase.firestore()
export const createNewOrg = (org) => {
  return (dispatch) => {
    const orgId = uuid()
    firestore.collection('orgs').doc(orgId)
      .set({
        ...org,
        freeTrail: true,
        date: new Date(),
        numberOfProjects: 1,
        numberOfMembers: 1
      }).then(() => {
        dispatch({ type: OrgActionTypes.CREATE_ORG_SUCCESS, payload: org });
      }).catch(err => {
        dispatch({ type: OrgActionTypes.CREATE_ORG_ERROR, payload: err });
      });
  }
};

export const getOrgsInvitations = (userEmail) => {
  console.log('get orgs called')
  return (dispatch) => {
    firestore.collection('invitations-to-orgs').doc(userEmail).collection('invitations')
      .onSnapshot((querySnapShot) => {
        const array = [];
        querySnapShot.forEach(doc => {
          array.push(doc.data())
       })
        dispatch({ type: OrgActionTypes.GET_ORG_SUCCESS, payload: array });

      }, (err => {
        dispatch({ type: OrgActionTypes.GET_ORG_ERROR, payload: err });
      })
      )

  }
};
