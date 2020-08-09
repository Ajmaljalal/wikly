import moment from 'moment'
import firebase from '../../firebase/firebase-config'
import { meetingsActions } from './types'

const firestore = firebase.firestore()
const meetingsCollection = firestore.collection('projects-meetings')

export const createMeeting = (profile, projectId, meeting) => {
  const { date, startTime, endTime, endDate } = meeting
  const startTimeWithDate = new Date(moment(`${date} ${startTime}:00`, 'YYYY-MM-DD HH:mm:ss').format());
  const endTimeWithDate = new Date(moment(`${date} ${endTime}:00`, 'YYYY-MM-DD HH:mm:ss').format());
  const formatedDate = moment.utc(moment(date)).format('M/D/YYYY');
  let formatedEndDate = endDate
  if (endDate) {
    formatedEndDate = new Date(moment(`${endDate} 00:00:00`, 'YYYY-MM-DD HH:mm:ss').format());
  }
  const newMeeting = meetingsCollection.doc(projectId).collection('meetings').doc()
  console.log(newMeeting)
  return (dispatch) => {
    newMeeting.set({
      ...meeting,
      meetingId: newMeeting.id,
      agenda: 0,
      notes: 0,
      attachments: 0,
      invitees: meeting.invitedMembers.length,
      startTime: startTimeWithDate,
      endTime: endTimeWithDate,
      date: formatedDate,
      endDate: formatedEndDate,
      scheduler: {
        id: profile.userId,
        name: profile.name
      }
    }).then(() => {
      dispatch({ type: meetingsActions.CREATE_MEETING_SUCCESS });
    }).catch(err => {
      dispatch({ type: meetingsActions.CREATE_MEETING_ERROR }, err);
    });
  }
};