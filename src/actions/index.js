import axios from "axios"

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const loading = () => ({ type: LOADING })
export const success = (data) => ({ type: SUCCESS, payload: data })
export const failure = (data) => ({ type: FAILURE, payload: data })

export const getLogin = () => async (dispatch) => {
    try {
        dispatch(loading());
       
        axios.get('')
            .then(response => {
                console.log("Login?", response.data)
                const info = response.data
                dispatch(
                    success(info)
                )
            })

    } catch (error) {
        dispatch(failure(error))
    }
};

