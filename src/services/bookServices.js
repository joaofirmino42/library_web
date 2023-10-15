import axios from 'axios';

export const getApiUrl = () => {
    return " http://127.0.0.1:8000";
}
//using AXIOS to make the POST request
export const postRegister = (data) => {

    return axios.post(getApiUrl() + "'/App/Book", data)
        .then(
            response => {
                return response.data;
            }
        )
}
//using AXIOS to make the GET request
export const Get = () => {

    return axios.get(getApiUrl() + "'/App/Book")
        .then(
            response => {
                return response.data;
            }
        )
}
//using AXIOS to make the GET request
export const GetBYId = (id) => {

    return axios.get(getApiUrl() + "'/App/Book/"+id)
        .then(
            response => {
                return response.data;
            }
        )
}
//using AXIOS to make the DELETE request
export const Delete = (idBook) => {

    return axios.delete(getApiUrl() + "'/App/Book/"+ idBook)
        .then(
            response => {
                return response.data;
            }
        )
}
//using AXIOS to make the PUT request
export const Update = (data) => {

    return axios.put(getApiUrl() + "'/App/Book", data)
        .then(
            response => {
                return response.data;
            }
        )
}