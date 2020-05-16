import moment from 'moment'
export const createMeeting = (meeting) => {
  const { date, startTime, endTime } = meeting
  const startTimeWithDate = moment(`${date} ${startTime}:00`, 'YYYY-MM-DD HH:mm:ss').format();
  const endTimeWithDate = moment(`${date} ${endTime}:00`, 'YYYY-MM-DD HH:mm:ss').format();
  const formatedDate = moment.utc(moment(date)).format('M/D/YYYY')
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    firestore.collection('project-meetings/')
      .doc('SZMKZDDzduTEYipp47Ad')
      .collection('meetings').add({
        ...meeting,
        startTime: new Date(startTimeWithDate),
        endTime: new Date(endTimeWithDate),
        date: formatedDate,
        schduler: {
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