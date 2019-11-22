import axiosWithAuth from '../../utils/axiosWithAuth';

export const EDIT_FAM_LOADING = "EDIT_FAM_LOADING";
export const EDIT_FAM_SUCCESS = "EDIT_FAM_SUCCESS";
export const EDIT_FAM_FAIL = "EDIT_FAM_FAIL";

export const editFamMemb = (FamMemberData, id) => dispatch => {
   dispatch({ type: EDIT_FAM_LOADING })
   console.log('test_n_editFamilyMember')

   axiosWithAuth()
      .put(`/api/children/${id}`, FamMemberData)
      .then(res => {
         
         axiosWithAuth()
         .get('/api/children')
         .then( response => {
            console.log("editFamilyMember", response.data);
            dispatch({ type: EDIT_FAM_SUCCESS, payload: response.data });
         })
         .catch(err => console.log(err))
         // history.push("/patient_home/:id/display_family_immu")
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: EDIT_FAM_FAIL, payload: err.response })
      });
};