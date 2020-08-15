import { applicationActions } from './types'
const initState = {
  current_screen: 'dashboard'
}

const applicationReducer = (state = initState, action) => {
  switch (action.type) {
    case applicationActions.CHANGE_APP_CURRENT_SCREEN:
      return {
        ...state,
        current_screen: action.payload
      };
    default:
      return state
  }
}

export default applicationReducer