import { OrgActionTypes } from './types'
const initState = {}

const orgReducer = (state = initState, action) => {
  switch (action.type) {
    case OrgActionTypes.SET_CURRENT_ORG_SUCCESS:
      return {
        ...state,
        current_org: action.payload
      }
    case OrgActionTypes.CREATE_ORG_SUCCESS:
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