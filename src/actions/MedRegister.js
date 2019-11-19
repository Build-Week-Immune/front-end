import axiosWithAuth from "../utils/axiosWithAuth";

//action types for med register
export const MED_REGISTER_LOADING = "MED_REGISTER_LOADING";
export const MED_REGISTER_SUCCESS = "MED_REGISTER_SUCCESS";
export const MED_REGISTER_FAILURE = "MED_REGISTER_FAILURE";


export const authMedRegister = (medProfRegister, props) => dispatch => {
    dispatch({ type: MED_REGISTER_LOADING });

    axiosWithAuth()
        .post(`## API MUST GO HERE`, medProfRegister)
}