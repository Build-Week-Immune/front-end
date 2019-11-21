import axios from 'axios'

export const MED_REGISTER_LOADING = "MED_REGISTER_LOADING";
export const MED_REGISTER_SUCCESS = "MED_REGISTER_SUCCESS";
export const MED_REGISTER_FAIL = "MED_REGISTER_FAIL";

export const MedRegister = (employeeInfo, history) => dispatch => {
    dispatch({ type: MED_REGISTER_LOADING })
    console.log("Test 2")

    axios.post('https://immunazation.herokuapp.com/api/auth/register', employeeInfo)
        .then(res => {
            console.log(res.data)
            dispatch({ type: MED_REGISTER_SUCCESS, payload: res.data })
            localStorage.setItem("Med register user_token", res.data.token);
            localStorage.setItem("Med register user_id", res.data.id);
            // Jonathan modified the next line by adding res.data.id after /patient_home/
            history.push(`/medical_home/${res.data.id}`);
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: MED_REGISTER_FAIL, payload: err.response });
        })

};
