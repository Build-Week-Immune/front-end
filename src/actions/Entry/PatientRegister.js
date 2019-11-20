import axios from 'axios';

export function patientSignUpRequest( patientInfo, history) {
    return dispatch => {
        console.log('test')
    return axios.post('https://immunazation.herokuapp.com/api/auth/register', patientInfo)
        .then( res => {
            console.log(res.data)
            localStorage.setItem("Patient register user token", res.data.token);
            localStorage.setItem("Patient register user id", res.data.id);
            // Jonathan modified the next line by adding res.data.id after /patient_home/
            history.push(`/patient_home/${res.data.id}`);
        })
        .catch(err => console.log(err))
    }
};

