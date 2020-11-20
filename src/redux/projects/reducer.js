import { projectsActions } from './types'
const initState = {}

const projectsReducer = (state = initState, action) => {
  switch (action.type) {
    case projectsActions.GET_PROJECTS_START:
      return {
        ...state,
        gettingProjects: true
      }
    case projectsActions.SET_CURRENT_PROJECT_SUCCESS:
      return {
        ...state,
        current_project: action.payload,
      }
    case projectsActions.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        gettingProjects: false
      };
    case projectsActions.UPDATE_PROJECTS_SUCCESS:
      return state
    default:
      return state
  }
}

export default projectsReducer