import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore } from 'redux-persist';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import firebase from '../firebase/firebase-config'

import rootReducer from './root-reducer';

const middlewares = [thunk.withExtraArgument(getFirebase, {getFirestore })];

if (process.env.NODE_ENV === 'development') {
  // middlewares.push(logger);
}

export const store = createStore(rootReducer,
  compose(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase)
  )
);


// export const persistor = persistStore(store);

export default { store };