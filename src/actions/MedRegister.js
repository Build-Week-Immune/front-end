import axios from 'axios'

export function MedRegister(employeeInfo, props){
    return dispatch => {
        return axios.post('https://immunazation.herokuapp.com/api/auth/register', employeeInfo)
        .then( response => {
            console.log(response.data)
            localStorage.setItem("Med register user_token", response.data.token);
            localStorage.setItem("Med register user_id", response.data.id);
            props.history.push("/patient-dashboard");
        })
        .catch(err => console.log(err))
    }
};
