import axios from "axios"

const axiosWithAuth = () => {
    //need to set user_token and our med_side token
    const token = localStorage.getItem('user_token' || 'med_token');
    // return an instance of axios
    return axios.create({
        baseURL: "https://immunizationtracker-bw.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth
