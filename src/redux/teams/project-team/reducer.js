import { teamsActions } from './types'
const initState = {}

const projectsReducer = (state = initState, action) => {
  switch (action.type) {
    case teamsActions.GET_TEAMS_START:
      return {
        ...state,
        gettingTeam: true
      }
    case teamsActions.GET_TEAMS_SUCCESS:
      return {
        ...state,
        team: action.payload,
        gettingTeam: false
      };
    default:
      return state
  }
}

export default projectsReducer