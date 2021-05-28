import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import appReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,appReducer);

  

  export let store = createStore(persistedReducer)
  export let persistor = persistStore(store)
 