// import moment from 'moment'
import { uuid } from '../../helpers/uuid'
import { OrgActionTypes } from './actionTypes'
export const createNewOrg = (org) => {
  // const { date, startTime, endTime, endDate } = meeting
  // const startTimeWithDate = new Date(moment(`${date} ${startTime}:00`, 'YYYY-MM-DD HH:mm:ss').format());
  // const endTimeWithDate = new Date(moment(`${date} ${endTime}:00`, 'YYYY-MM-DD HH:mm:ss').format());
  // const formatedDate = moment.utc(moment(date)).format('M/D/YYYY');
  // let formatedEndDate = endDate
  // if (endDate) {
  //   formatedEndDate = new Date(moment(`${endDate} 00:00:00`, 'YYYY-MM-DD HH:mm:ss').format());
  // }
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const creatorId = getState().firebase.auth.uid;
    const orgId = uuid()
    console.log(orgId)
    firestore.collection('orgs').doc(orgId)
      .set({
        ...org,
        freeTrail: true,
        creatorId: creatorId,
        date: new Date(),
        numberOfProjects: 1,
        numberOfMembers: 1
    }).then(() => {
      dispatch({ type: OrgActionTypes.CREATE_ORG_SUCCESS, payload: org });
    }).catch(err => {
      dispatch({ type: OrgActionTypes.CREATE_ORG_ERROR , payload: err});
    });
  }
};