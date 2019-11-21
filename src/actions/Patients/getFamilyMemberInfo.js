import axiosWithAuth from "../../utils/axiosWithAuth";
// import axios from 'axios';

export const GET_FAMILY_INFO_START = "GET_FAMILY_INFO_START";
export const GET_FAMILY_INFO_SUCCESS = "GET_FAMILY_INFO_SUCCESS";
export const GET_FAMILY_INFO_FAILURE = "GET_FAMILY_INFO_FAILURE";

export const getFamily = () => async (dispatch) => {
    try {
    dispatch({ type: GET_FAMILY_INFO_START });
    // console.log("get_fam_member_action")
    // axiosWithAuth()
        axiosWithAuth()
        .get('/api/children')
        .then(res => {
            console.log("FamMember info",res.data)
            dispatch({ type: GET_FAMILY_INFO_SUCCESS, payload: res.data })
        })
    }
        catch(err) {
            dispatch({ type: GET_FAMILY_INFO_FAILURE, payload: err })
        };
};