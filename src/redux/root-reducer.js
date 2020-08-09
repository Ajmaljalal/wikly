import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase'

import applicationReducer from './application/reducer'
import meetingsReducer from './meetings/meetingsReducer'
import orgReducer from './orgs/reducer'
import profileReducer from './userProfile/reducer'
import authReducer from './authentications/authReducer'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['applicationState', 'authState', 'meetingsState', 'orgsState', 'profileState']
};


const rootReducer = combineReducers({
  applicationState: applicationReducer,
  meetingsState: meetingsReducer,
  orgsState: orgReducer,
  profileState: profileReducer,
  authState: authReducer
});

export default persistReducer(persistConfig, rootReducer);