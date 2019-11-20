import { GET_FAMILY_INFO_START, GET_FAMILY_INFO_SUCCESS, GET_FAMILY_INFO_FAILURE } from "../actions/Patients/getFamilyMemberInfo";

const initialState = {
    getFamilyMemberInfo: [],
    isLoading: false,
    error: ""
}

const GetFamReducer = ( state = initialState, action ) => {
    switch(action.type){
        case GET_FAMILY_INFO_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case GET_FAMILY_INFO_SUCCESS:
            return{
                ...state,
                getFamilyMemberInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case GET_FAMILY_INFO_FAILURE:
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

export default GetFamReducer;
