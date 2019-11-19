import AuthReducer from './AuthReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers(AuthReducer)