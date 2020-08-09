import { applicationActions } from './types'
export const changeCurrentAppScreen = (screen) => {
  return (dispatch) => {
      dispatch({ type: applicationActions.CHANGE_APP_CURRENT_SCREEN, payload: screen });
    }
};