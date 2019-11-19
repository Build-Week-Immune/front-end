import axios from 'axios';

export function patientSignUpRequest(patientInfo) {
    return axios.post('https://immunazation.herokuapp.com/api/auth/register', patientInfo)
        .then( response => {
            console.log(response.data)
            localStorage.setItem("Patient register user token", res.data.token);
            localStorage.setItem("Patient register user id", res.data.id);
            props.history.push("/");
        })
        .catch(err => console.log(err))
};

