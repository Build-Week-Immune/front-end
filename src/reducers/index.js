import AuthReducer from './AuthReducer';
import MedAuthReducer from './MedAuthReducer';
import PatientRegisterReducer from './PatientRegisterReducer';
import GetFamReducer from './GetFamReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers(AuthReducer,MedAuthReducer, PatientRegisterReducer, GetFamReducer, )
