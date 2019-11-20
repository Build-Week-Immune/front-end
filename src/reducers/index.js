import AuthReducer from './AuthReducer';
import Pickles from './GetFamReducer';
import { combineReducers } from 'redux';


export const rootReducer = combineReducers(AuthReducer, Pickles)