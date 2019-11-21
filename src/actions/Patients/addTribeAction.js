import axiosWithAuth from '../../utils/axiosWithAuth';

export const ADD_TRIBE_LOADING = "ADD_TRIBE_LOADING";
export const ADD_TRIBE_SUCCESS = "ADD_TRIBE_SUCCESS";
export const ADD_TRIBE_FAIL = "ADD_TRIBE_FAIL";

export const addTribe = (FamMemberData, history) => dispatch => {
    dispatch({type: ADD_TRIBE_LOADING })
        console.log('test_inAdd_Tribe')

        axiosWithAuth()
        .post(`/api/children`, FamMemberData )
        .then(res => {
            console.log('TribeData',res.data)
            dispatch({type: ADD_TRIBE_SUCCESS, payload: res.data});
            history.push("/display_family_immu");
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_TRIBE_FAIL, payload: err.response});
    });
};

