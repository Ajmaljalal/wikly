
export const createMeeting = (meeting) => {
  return (dispatch, {getFirestore}) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    firestore.collection('meetings').add({
      ...meeting,
    }).then(() => {
      dispatch({ type: 'CREATE_MEETING_SUCCESS', payload: meeting });
    }).catch(err => {
      dispatch({ type: 'CREATE_MEETING_ERROR' }, err);
    });
  }
};