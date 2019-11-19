import axios from "axios"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "FAILURE"

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = () => ({ type: LOGIN_SUCCESS })
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

// export const login = (username, password) => {
//     return dispatch => {
//         dispatch(loginRequest({ username }));

        
//             .then(
//                 user => { 
//                     dispatch(loginSuccess(user));
//                     history.push('/');
//                 },
//                 error => {
//                     dispatch(loginFailure(error));
//                     dispatch(alertActions.error(error));
//                 }
//             );
//     };
// };

export const logInUser = (credentials) => async (dispatch) => {
    try {
        dispatch(loginRequest());

        axios.post('', credentials)
            .then(response => {
                console.log('logInUser action', response);
                // const info = response.data;
                sessionStorage.setItem('jwt', response.jwt);
                dispatch(
                    loginSuccess()
                )
            })

    } catch (error) {
        dispatch(loginFailure(error))
    }
};
