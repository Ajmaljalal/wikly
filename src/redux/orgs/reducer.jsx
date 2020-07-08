import { OrgActionTypes } from './types'
const initState = {}

const orgReducer = (state = initState, action) => {
  switch (action.type) {
    case OrgActionTypes.CREATE_ORG_SUCCESS:
      console.log('org created')
      break;
    case OrgActionTypes.GET_ORG_SUCCESS:
      return {
        ...state,
        invitations: action.payload
      };
    default:
      return state
  }
}

export default orgReducer