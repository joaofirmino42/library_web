import axios from 'axios';

export const getApiUrl = () => {
    return " http://127.0.0.1:8000";
}

export const postRegister = (id_user, BookId) => {
    let data = {
        id_user: id_user,
        BookId: BookId
    }
    return axios.post(getApiUrl() + "/BookRent/POST", data)
        .then(
            response => {
                return response.data;
            }
        )
}
export const Get = (userId) => {

    return axios.get(getApiUrl() + "/BookRent/" + userId)
        .then(
            response => {
                return response.data;
            }
        )
}