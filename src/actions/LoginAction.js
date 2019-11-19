import axios from "axios"

export const LOGIN_LOADING = "USER_LOGIN_START";
export const LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USER_LOGIN_FAILURE";

const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  };

export const authUsersLogin = (patientLogin, props) => dispatch => {
  dispatch({ type: LOGIN_LOADING });

  axiosWithAuth()
    .post(`/api/auth/login`, patientLogin)
    .then(res => {
      console.log(
        `This is the login console.log in index.js - user_login`,
        res
      );
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("user_token", res.data.token);
      localStorage.setItem("user_id", res.data.id);
      props.history.push("/patient-dashboard");
    })
    .catch(err => {
      console.log(
        `This is the failure console.log in index.js - user_login`,
        err
      );
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};
