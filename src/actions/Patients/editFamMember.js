import axiosWithAuth from '../../utils/axiosWithAuth';

export const EDIT_FAM_LOADING = "EDIT_FAM_LOADING";
export const EDIT_FAM_SUCCESS = "EDIT_FAM_SUCCESS";
export const EDIT_FAM_FAIL = "EDIT_FAM_FAIL";

export const editFamilyMember = (FamMemberData, id) => dispatch => {
   dispatch({ type: EDIT_FAM_LOADING }) 
   console.log('test_n_editFamilyMember')

   axiosWithAuth()
   .put(`/api/users/${id}`, FamMemberData)
   .then(res => {
      console.log("editFamilyMember", res.data);
      dispatch({ type: EDIT_FAM_SUCCESS, payload: res.data});
   })
   .catch(err => {
      console.log(err)
      dispatch({ type: EDIT_FAM_FAIL, payload: err.response})
   });
};