import moment from 'moment'
export const createMeeting = (meeting) => {
  const { date, startTime, endTime, endDate } = meeting
  const startTimeWithDate = new Date(moment(`${date} ${startTime}:00`, 'YYYY-MM-DD HH:mm:ss').format());
  const endTimeWithDate = new Date(moment(`${date} ${endTime}:00`, 'YYYY-MM-DD HH:mm:ss').format());
  const formatedDate = moment.utc(moment(date)).format('M/D/YYYY');
  let formatedEndDate = endDate
  if (endDate) {
    formatedEndDate = new Date(moment(`${endDate} 00:00:00`, 'YYYY-MM-DD HH:mm:ss').format());
  }
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    firestore.collection('project-meetings/')
      .doc('SZMKZDDzduTEYipp47Ad')
      .collection('meetings').add({
        ...meeting,
        id: (Math.random()*1000+Math.random()*2000).toString(),
        agenda: 0,
        notes: 0,
        attachments: 0,
        invitees: meeting.invitedMembers.length,
        startTime: startTimeWithDate,
        endTime: endTimeWithDate,
        date: formatedDate,
        endDate: formatedEndDate,
        scheduler: {
          id: 'user id',
          name: 'Ajmal Jalal'
        }
    }).then(() => {
      dispatch({ type: 'CREATE_MEETING_SUCCESS', payload: meeting });
    }).catch(err => {
      dispatch({ type: 'CREATE_MEETING_ERROR' }, err);
    });
  }
};