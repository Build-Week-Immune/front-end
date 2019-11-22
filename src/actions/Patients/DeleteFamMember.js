import axiosWithAuth from "../../utils/axiosWithAuth";

export const DELETE_FAM_MEM_START = "DELETE_FAM_MEM_START";
export const DELETE_FAM_MEM_SUCCESS = "DELETE_FAM_MEM_SUCCESS";
export const DELETE_FAM_MEM_FAILURE = "DELETE_FAM_MEM_FAILURE";

export const deleteFamily = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_FAM_MEM_START });
        axiosWithAuth()
            .delete(`/api/children/${id}`)
            .then(res => {
                axiosWithAuth()
                    .get('/api/children')
                    .then(response => {
                        console.log("DeleteFamMember", response.data)
                        dispatch({ type: DELETE_FAM_MEM_SUCCESS, payload: response.data });
                    })
                    .catch(err => console.log(err))

            })
    }
    catch (err) {
        dispatch({ type: DELETE_FAM_MEM_FAILURE, payload: err })
    };
};