import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/Entry/LoginAction';


const initialState = {
        patientInfo: [],
        isLoading: false,
        error: "",
        isAuth: localStorage.getItem('token') ? true : false
    }
    
    // 1. Patient (same as user) Register Reducer
const AuthReducer = ( state = initialState, action ) => {
        switch(action.type) {
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
                    error: ""
                }
            case LOGIN_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    isLoading: false
                }
            default:
                return state;
        }
    }

export default AuthReducer;