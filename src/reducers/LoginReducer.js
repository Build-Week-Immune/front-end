import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/LoginAction';

const initialState = {
    credentials: "",
    error: null,
    loggedIn: false,
    session: !!sessionStorage.jwt
}

const LoginReducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                loggedIn: true
            }
        case LOGIN_SUCCESS:
                browserHistory.push('/')
            return {
                ...state,
                credentials: action.payload,
                loggedIn: false,
                session: !!sessionStorage.jwt
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                credentials:"",
                error: action.payload,
                loggedIn: false
            }
        default:
            return state;
    }
}
export default LoginReducer;