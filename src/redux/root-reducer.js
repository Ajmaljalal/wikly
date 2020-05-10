import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import meetingsReducer from './meetings/meetingsReducer'


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// };

const rootReducer = combineReducers({
  meetings: meetingsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;