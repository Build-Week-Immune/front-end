import axios from "axios";

export const LOGIN_LOADING = "USER_LOGIN_START";
export const LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USER_LOGIN_FAILURE";



export const authUsersLogin = (patientLogin, history) => dispatch => {
  dispatch({ type: LOGIN_LOADING });

  axios
  //we need our base url
    .post("https://immunazation.herokuapp.com/api/auth/login", patientLogin)
    .then(res => {
      console.log( "In login action-creator", res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("user_token", res.data.token);
      localStorage.setItem("user_id", res.data.id);
      history.push("/patient_home");
    })
    .catch(err => {
      console.log(
        `This is the failure console.log in index.js - user_login`,
        err
      );
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};