import axios from 'axios';

export const PATIENT_REGISTER_LOADING = "PATIENT_REGISTER_LOADING";
export const PATIENT_REGISTER_SUCCESS = "PATIENT_REGISTER_SUCCESS";
export const PATIENT_REGISTER_FAIL = "PATIENT_REGISTER_FAIL";


export const patientSignUpRequest = ( patientInfo, history) => dispatch => {
     dispatch({ type: PATIENT_REGISTER_LOADING });

    axios 
    .post('https://immunazation.herokuapp.com/api/auth/register', patientInfo)
    .then( res => {
        console.log(res.data);
        dispatch({ type: PATIENT_REGISTER_SUCCESS, payload: res.data});
        localStorage.setItem("Patient register user token", res.data.token);
        localStorage.setItem("Patient register user id", res.data.id);
        // Jonathan modified the next line by adding res.data.id after /patient_home/
        history.push(`/patient_home/${res.data.id}`);
    })
    .catch(err => {
console.log(err);
dispatch({type: PATIENT_REGISTER_FAIL, payload: err.response });
    }) 
};

// console.log('test')