import { profileActions } from './types'
const initState = {}

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case profileActions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state
  }
}

export default profileReducer