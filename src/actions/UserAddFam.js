import axiosWithAuth from "../utils/axiosWithAuth";

// ADD PATIENT FROM USER ACCOUNT (POST) (USER ACCESS ONLY)
export const ADD_NEW_FAMILY_START = "ADD_NEW_FAMILY_START";
export const ADD_NEW_FAMILY_SUCCESS = "ADD_NEW_FAMILY_SUCCESS";
export const ADD_NEW_FAMILY_FAILURE = "ADD_NEW_FAMILY_FAILURE";


//what will I need for my argument? 
export const addNewFamily = () => {
    dispatchEvent({ type: ADD_NEW_FAMILY_START });

    axiosWithAuth()
        .post(`Some endpoint needed`)
        .then(res => {
            dispatch({ type: ADD_NEW_FAMILY_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ADD_NEW_FAMILY_FAILURE, payload: err.response });
        });
};
