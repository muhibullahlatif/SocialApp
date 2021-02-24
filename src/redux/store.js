import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    timeout: 10000,
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
    blacklist: [],
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk),
);

const persistor = persistStore(store);

export { store, persistor };