// import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/LoginAction';

// const initialState = {
//     user: "",
//     error: null,
//     loggedIn: false
// }

// export const reducer = (state = initialState, action) => {
//     console.log("reducer", action);
//     switch (action.type) {
//         case LOGIN_LOADING:
//             return {
//                 ...state,
//                 error: null,
//                 loggedIn: true
//             }
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 credentials: action.payload,
//                 loggedIn: false
//             }
//         case LOGIN_FAILURE:
//             return {
//                 ...state,
//                 credentials:"",
//                 error: action.payload,
//                 loggedIn: false
//             }
//         default:
//             return state;
//     }
// }