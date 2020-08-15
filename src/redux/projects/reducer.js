import { projectsActions } from './types'
const initState = {}

const projectsReducer = (state = initState, action) => {
  switch (action.type) {
    case projectsActions.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload
      };
    case projectsActions.UPDATE_PROJECTS_SUCCESS:
      return state
    default:
      return state
  }
}

export default projectsReducer