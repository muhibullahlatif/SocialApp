import { combineReducers } from 'redux';
import AppReducer from './appReducers';
import { RESET_STORE } from '../actions/types';
import { appDefaultReducer } from './defaultReducer';

const appReducer = combineReducers({
    app: AppReducer
});

export default function rootReducer(state, action) {
    let finalState = appReducer(state, action);
    if (action.type === RESET_STORE) {
        finalState = appDefaultReducer;
    }
    return finalState;
}