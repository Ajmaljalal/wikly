const initState = {}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('signed in')
      break;
    case 'SIGNOUT_SUCCESS':
      console.log('signed out')
      break;
    default:
      return state
  }
}

export default authReducer