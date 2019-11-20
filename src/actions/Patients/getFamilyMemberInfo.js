import axiosWithAuth from "../../utils/axiosWithAuth";


export const GET_FAMILY_INFO_START = "GET_FAMILY_INFO_START";
export const GET_FAMILY_INFO_SUCCESS = "GET_FAMILY_INFO_SUCCESS";
export const GET_FAMILY_INFO_FAILURE = "GET_FAMILY_INFO_FAILURE";

export const getFamily = (familyData) => dispatch => {
    dispatch({type: GET_FAMILY_INFO_START});
    const authAxios = axiosWithAuth();
    authAxios
    .get(``)
    .then(res => {
        dispatch({type: GET_FAMILY_INFO_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: GET_FAMILY_INFO_FAILURE, payload: err })
    });
} ;