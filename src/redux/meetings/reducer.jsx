import { meetingsActions } from './types'
const initState = {}

const meetingsReducer = (state = initState, action) => {
  switch (action.type) {
    case meetingsActions.CREATE_MEETING_SUCCESS:
      break;
    case meetingsActions.GET_ONE_MEETING_SUCCESS:
      return {
        ...state,
        current_meeting: action.payload
      }
    case meetingsActions.GET_MEETINGS_SUCCESS:
      return {
        ...state,
        meetings: action.payload
      }
    default:
      return state
  }
}

export default meetingsReducer