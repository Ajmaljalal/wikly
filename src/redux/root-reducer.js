import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import meetingsReducer from './meetings/meetingsReducer'
import orgReducer from './orgs/orgReducer'


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// };

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  meetings: meetingsReducer,
  orgs: orgReducer,
});

export default rootReducer;