import axios from 'axios'

export function MedRegister(employeeInfo){
    return dispatch => {
        return axios.post('https://immunazation.herokuapp.com/api/auth/register', employeeInfo)
        .then( response => {
            console.log(response.data)
            localStorage.setItem("Med register user_token", res.data.token);
            localStorage.setItem("Med register user_id", res.data.id);
            props.history.push("/patient-dashboard");
        })
        .catch(err => console.log(err))
    }
};
