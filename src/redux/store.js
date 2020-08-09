import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  // middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(...middlewares)
  )
);


export const persistor = persistStore(store);
