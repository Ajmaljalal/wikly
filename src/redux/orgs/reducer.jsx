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
    case OrgActionTypes.UPDATE_INVITE_SUCCESS:
      return state
    
    // TODO: add casses for delete invite
    default:
      return state
  }
}

export default orgReducer