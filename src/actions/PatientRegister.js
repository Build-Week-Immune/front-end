import axios from 'axios';

export function patientSignUpRequest( patientInfo, history) {
    return dispatch => {
        console.log('test')
    return axios.post('https://immunazation.herokuapp.com/api/auth/register', patientInfo)
        .then( res => {
            console.log(res.data)
            localStorage.setItem("Patient register user token", res.data.token);
            localStorage.setItem("Patient register user id", res.data.id);
            history.push("/");
        })
        .catch(err => console.log(err))
    }
};

