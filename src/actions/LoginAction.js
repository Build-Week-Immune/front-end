import axios from "axios"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "FAILURE"

export const loginRequest = (user) => ({ type: LOGIN_REQUEST })
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: data })
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: data })

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginRequest({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(loginSuccess(user));
                    history.push('/');
                },
                error => {
                    dispatch(loginFailure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

