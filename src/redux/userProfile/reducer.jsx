import { profileActions } from './types'
const initState = {}

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case profileActions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    case profileActions.UPDATE_PROFILE_SUCCESS:
      return state
    default:
      return state
  }
}

export default profileReducer