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
      /////////////////////////// MEETING AGENDAS //////////////////////////
    case meetingsActions.GET_MEETING_AGENDA_SUCCESS:
      return {
        ...state,
        meeting_agenda: action.payload
      }
    case meetingsActions.GET_MEETING_AGENDA_ERROR:
      return {
        ...state,
        meeting_agenda_error: action.payload
      }

      ///////////////////////// MEETING NOTES ////////////////////////
    case meetingsActions.GET_MEETING_NOTES_SUCCESS:
      return {
        ...state,
        meeting_notes: action.payload
      }
    case meetingsActions.GET_MEETING_NOTES_ERROR:
      return {
        ...state,
        meeting_notes_error: action.payload
      }

      ////////////////// MEETING INVITEES ////////////////////////////
    case meetingsActions.GET_MEETING_INVITEES_SUCCESS:
      return {
        ...state,
        meeting_invitees: action.payload
      }
    case meetingsActions.GET_MEETING_INVITEES_ERROR:
      return {
        ...state,
        meeting_invitees_error: action.payload
      }
      
    default:
      return state
  }
}

export default meetingsReducer