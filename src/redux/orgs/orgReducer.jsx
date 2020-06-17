import { OrgActionTypes } from './actionTypes'
const initState = {}

const orgReducer = (state = initState, action) => {
  switch (action.type) {
    case OrgActionTypes.CREATE_ORG_SUCCESS:
      console.log('new org created')
      break;
    default:
      return state
  }
}

export default orgReducer