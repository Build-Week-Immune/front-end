import axiosWithAuth from '../../utils/axiosWithAuth';

export const addTribe = (FamMemberData, history) => {
    return dispatch => {
        console.log('test_inAdd_Family')
        const authAxios = axiosWithAuth();
        return authAxios
        .post(``, FamMemberData )
        .then(res => {
            console.log('FamMemData',res.data)
            history.push("/display_family");
        })
        .catch(err => console.log(err))
    };
    
};
