import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authentications/authReducer'
import profileReducer from './userProfile/reducer'
import applicationReducer from './application/reducer'
import orgReducer from './orgs/reducer'
import projectsReducer from './projects/reducer'
import meetingsReducer from './meetings/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authState', 'profileState', 'applicationState', ]
};

const rootReducer = combineReducers({
  authState: authReducer,
  profileState: profileReducer,
  applicationState: applicationReducer,
  orgsState: orgReducer,
  projectsState: projectsReducer,
  meetingsState: meetingsReducer,
});

export default persistReducer(persistConfig, rootReducer);