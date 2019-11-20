import AuthReducer from './AuthReducer';
import MedAuthReducer from './MedAuthReducer'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers(AuthReducer, MedAuthReducer)