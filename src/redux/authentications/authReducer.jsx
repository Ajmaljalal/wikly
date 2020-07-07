const initState = {}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        auth: true
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        auth: true
      }
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        auth: false
      }
    default:
      return state
  }
}

export default authReducer