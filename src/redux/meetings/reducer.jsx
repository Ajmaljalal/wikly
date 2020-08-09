const initState = {}

const meetingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MEETING_SUCCESS':
      console.log('meeting added')
      return state;
    default:
      return state
  }
}

export default meetingsReducer