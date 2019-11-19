import axios from "axios"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "FAILURE"

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

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
};
