import axios from 'axios'

export function MedRegister(employeeInfo, history){
    return dispatch => {
        console.log("Test 2")
        return axios.post('https://immunazation.herokuapp.com/api/auth/register', employeeInfo)
        .then( res => {
            console.log(res.data)
            localStorage.setItem("Med register user_token", res.data.token);
            localStorage.setItem("Med register user_id", res.data.id);
             history.push("/");
        })
        .catch(err => console.log(err))
    }
};
