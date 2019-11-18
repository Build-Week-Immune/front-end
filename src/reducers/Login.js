import { LOADING, SUCCESS, FAILURE } from '../actions/index';

const initialState = {
    beers: [],
    error: null,
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                beers: action.payload,
                isLoading: false
            }
        case FAILURE:
            return {
                ...state,
                beers: [],
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}