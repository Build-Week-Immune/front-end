import AuthReducer from './AuthReducer';
import MedAuthReducer from './MedAuthReducer';
import GetFamReducer from './GetFamReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({AuthReducer, GetFamReducer, MedAuthReducer})


