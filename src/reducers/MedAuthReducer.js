import { MED_LOGIN_LOADING, MED_LOGIN_SUCCESS, MED_LOGIN_FAILURE } from '../actions/Entry/MedLoginAction';


const initialState = {
        MedInfo: [],
        isLoading: false,
        error: "",
        isAuth: localStorage.getItem('token') ? true : false
    }
    
    // 1. Patient (same as user) Register Reducer
const MedAuthReducer = ( state = initialState, action ) => {
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
                    error: ""
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

export default MedAuthReducer;