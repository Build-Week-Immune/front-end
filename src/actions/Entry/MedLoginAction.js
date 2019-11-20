import axios from "axios";

export const MED_LOGIN_LOADING = "MED_LOGIN_START";
export const MED_LOGIN_SUCCESS = "MED_LOGIN_SUCCESS";
export const MED_LOGIN_FAILURE = "MED_LOGIN_FAILURE";



export const authMedLogin = (medLogin, history) => dispatch => {
  dispatch({ type: MED_LOGIN_LOADING });

  axios
 
    .post("https://immunazation.herokuapp.com/api/auth/login", medLogin)
    .then(res => {
      console.log( "In login action-creator", res);
      dispatch({ type: MED_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("admin_token", res.data.token);
      localStorage.setItem("admin_id", res.data.id);
      history.push("/medical_home");
    })
    .catch(err => {
      console.log(
        `This is the failure console.log in index.js - med_login`,
        err
      );
      dispatch({ type: MED_LOGIN_FAILURE, payload: err.response });
    });
};