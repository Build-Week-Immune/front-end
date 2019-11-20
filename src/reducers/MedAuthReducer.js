import { MED_LOGIN_LOADING, MED_LOGIN_SUCCESS, MED_LOGIN_FAILURE } from '../actions/Entry/MedLoginAction';


const initialState = {
        MedInfo: [],
        isLoading: false,
        error: "",
        id: "", 
        isAuth: localStorage.getItem('token') ? true : false
    }
    
    // 1. Patient (same as user) Register Reducer
const AuthReducer = ( state = initialState, action ) => {
        switch(action.type) {
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
                    id: action.payload
                }
            case MED_LOGIN_FAILURE:
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