import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/Entry/LoginAction';

import {
    MED_LOGIN_LOADING,
    MED_LOGIN_SUCCESS,
    MED_LOGIN_FAILURE
} from '../actions/Entry/MedLoginAction';

import {
    PATIENT_REGISTER_LOADING,
    PATIENT_REGISTER_SUCCESS,
    PATIENT_REGISTER_FAIL
} from '../actions/Entry/PatientRegister';

import {
    MED_REGISTER_LOADING,
    MED_REGISTER_SUCCESS,
    MED_REGISTER_FAIL,
} from '../actions/Entry/MedRegister';

import {
    GET_FAMILY_INFO_START,
    GET_FAMILY_INFO_SUCCESS,
    GET_FAMILY_INFO_FAILURE
} from "../actions/Patients/getFamilyMemberInfo";

import {
    ADD_TRIBE_LOADING,
    ADD_TRIBE_SUCCESS,
    ADD_TRIBE_FAIL
} from "../actions/Patients/addTribeAction";

import {
    EDIT_FAM_LOADING,
    EDIT_FAM_SUCCESS,
    EDIT_FAM_FAIL
} from "../actions/Patients/editFamMember";

const initialState = {
    patientInfo: [],
    MedInfo: [],
    FamilyMemberInfo: [],
    isLoading: false,
    error: "",
    id: "",
    isAuth: localStorage.getItem('token') ? true : false
}

// 1. Patient (same as user) Register Reducer
export const reducer = (state = initialState, action) => {
    switch (action.type) {

        // Patient Login Cases---------------------------------
        case LOGIN_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                patientInfo: action.payload,
                isLoading: false,
                error: "",
                // id: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        // Medical Login Cases-------------------------------
        case MED_LOGIN_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case MED_LOGIN_SUCCESS:
            return {
                ...state,
                MedInfo: action.payload,
                isLoading: false,
                error: "",
                // id: action.payload
            }
        case MED_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        // Patient Registeration------------------------------
        case PATIENT_REGISTER_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case PATIENT_REGISTER_SUCCESS:
            return {
                ...state,
                patientInfo: action.payload,
                isLoading: false,
                error: "",
                id: action.payload
            }
        case PATIENT_REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        // Med Registration--------------------------------------
        case MED_REGISTER_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case MED_REGISTER_SUCCESS:
            return {
                ...state,
                MedInfo: action.payload,
                isLoading: false,
                error: "",
                id: action.payload
            }
        case MED_REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        // Get Family Information---------------------------------
        case GET_FAMILY_INFO_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case GET_FAMILY_INFO_SUCCESS:
            return {
                ...state,
                FamilyMemberInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case GET_FAMILY_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        //Post Family info--------------------------------------------
        case ADD_TRIBE_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case ADD_TRIBE_SUCCESS:
            return {
                ...state,
                FamilyMemberInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case ADD_TRIBE_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        // Edit Family Member Info--------------------------------------------
        case EDIT_FAM_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case EDIT_FAM_SUCCESS:
            return {
                ...state,
                FamilyMemberInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case EDIT_FAM_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

