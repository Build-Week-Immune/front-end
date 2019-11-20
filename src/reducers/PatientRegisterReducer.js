import { 
    PATIENT_REGISTER_LOADING, 
    PATIENT_REGISTER_SUCCESS, 
    PATIENT_REGISTER_FAIL 
} from '../actions/Entry/PatientRegister';


const initialState = {
        patientInfo: [],
        isLoading: false,
        error: "",
        id: "",
        isAuth: localStorage.getItem('token') ? true : false
    }
    
    // 1. Patient (same as user) Register Reducer
const AuthReducer = ( state = initialState, action ) => {
        switch(action.type) {
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
            default:
                return state;
        }
    }

export default AuthReducer;