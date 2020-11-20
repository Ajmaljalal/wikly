import moment from 'moment'
import firebase from '../../firebase/firebase-config'
import { meetingsActions } from './types'

const firestore = firebase.firestore()
const meetingsCollection = firestore.collection('projects-meetings')
const meetingsAgendaCollection = firestore.collection('meetings-agendas')
const meetingsNotesCollection = firestore.collection('meetings-notes')
const meetingsInviteesCollection = firestore.collection('meetings-invitees')

/**
 * 
 * @param {Object} profile 
 * @param {String} projectId 
 * @param {Object} meeting 
 */
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

/**
 * 
 * @param {String} projectId 
 * @param {String} meetingId 
 */
export const getOneMeeting = (projectId, meetingId) => {
  return (dispatch) => {
  meetingsCollection.doc(projectId).collection('meetings').doc(meetingId).onSnapshot((doc) => {
      dispatch({ type: meetingsActions.GET_ONE_MEETING_SUCCESS, payload: doc.data() });
    }, (err => {
      dispatch({ type: meetingsActions.GET_ONE_MEETING_ERROR, payload: err });
    })
    );
  }
}

/**
 * 
 * @param {String} projectId 
 */
export const getMeetings = (projectId) => {
  return (dispatch) => {
    meetingsCollection.doc(projectId).collection('meetings').onSnapshot((querySnapShot) => {
      const array = [];
      querySnapShot.forEach(doc => {
        const meeting = { ...doc.data() }
        array.push(meeting)
      })
      console.log('get meeting called', array)
      dispatch({ type: meetingsActions.GET_MEETINGS_SUCCESS, payload: array });
    }, (err => {
      dispatch({ type: meetingsActions.GET_MEETINGS_ERROR, payload: err });
    })
    );
  }
};

/**
 * 
 * @param {string} meetingId 
 */
export const getMeetingAgenda = (meetingId) => {
  return (dispatch) => {
    meetingsAgendaCollection.doc(meetingId).collection('agenda').onSnapshot((querySnapShot) => {
      const array = [];
      console.log('here')
      querySnapShot.forEach(doc => {
        const agenda = { agendaId: doc.id, ...doc.data() }
        array.push(agenda)
      })
      dispatch({ type: meetingsActions.GET_MEETING_AGENDA_SUCCESS, payload: array });
    }, (err => {
      console.log('error:', err)
      dispatch({ type: meetingsActions.GET_MEETING_AGENDA_ERROR, payload: err });
    })
    );
  }
}

/**
 * 
 * @param {string} meetingId 
 */
export const getMeetingNotes = (meetingId) => {
  return (dispatch) => {
    meetingsNotesCollection.doc(meetingId).collection('notes').onSnapshot((querySnapShot) => {
      const array = [];
      querySnapShot.forEach(doc => {
        const note = { noteId: doc.id, ...doc.data() }
        array.push(note)
      })
      dispatch({ type: meetingsActions.GET_MEETING_NOTES_SUCCESS, payload: array });
    }, (err => {
      dispatch({ type: meetingsActions.GET_MEETING_NOTES_ERROR, payload: err });
    })
    );
  }
}

/**
 * 
 * @param {string} meetingId 
 */
export const getMeetingInvitees = (meetingId) => {
  return (dispatch) => {
      meetingsInviteesCollection.doc(meetingId).collection('invitees').onSnapshot((querySnapShot) => {
        const array = [];
        querySnapShot.forEach(doc => {
            const invitee = { inviteeId: doc.id, ...doc.data() }
            array.push(invitee)
        })
        dispatch({ type: meetingsActions.GET_MEETING_INVITEES_SUCCESS, payload: array });
    }, (err => {
      dispatch({ type: meetingsActions.GET_MEETING_INVITEES_ERROR, payload: err });
    })
    );
  }
}