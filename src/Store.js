import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(promise(), thunk, createLogger());
const Store = createStore(persistedReducer, {}, middleware);
const Persistor = persistStore(Store);

export { Store, Persistor };
