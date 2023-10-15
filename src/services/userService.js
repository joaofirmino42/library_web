import axios from 'axios';
import * as authHelpers from '../helpers/auth-helpers';
export const getApiUrl = () => {
    return " http://127.0.0.1:8000";
}
export const postLogin = (data) => {
    //using AXIOS to make the POST request
    return axios.post(getApiUrl() + "/App/User/Login", data)
        .then(
            response => {
                return response.data;
            }
        )
}
export const getRegister = () => {
    //using AXIOS to make the GET request
    return axios.get(getApiUrl() + "/App/User")
        .then(
            response => {
                return response.data;
            }
        )
}
//using AXIOS to make the GET ById request
export const getRegisterById = (id) => {

    return axios.get(getApiUrl() + "/App/User" + id)
        .then(
            response => {
                return response.data;
            }
        )
}
//using AXIOS to make the POST request
export const postRegister = (request) => {

    return axios.post(getApiUrl() + "/App/User", request)
        .then(
            response => {
                return response.data;
            }

        )

}
//using AXIOS to make the DELETE request
export const deleteRegister = (id_user) => {

    return axios.delete(getApiUrl() + "/App/User/" + id_user)
        .then(
            response => {
                return response.data;
            }
        )
}
//using AXIOS to make the PUT request
export const upateRegister = (data) => {

    return axios.put(getApiUrl() + "/App/User/", data)
        .then(
            response => {
                return response.data;
            }
        )
}
//creating an interceptor to always send the TOKEN when
//a request to the API Contacts service is made
axios.interceptors.request.use(
    config => {

        //checking if the request made by the project
        //is for the Contacts API
        if (config.url.includes(getApiUrl())) {
            //get the token saved in LOCAL STORAGE
            var token = authHelpers.getAccessToken();
            //sending the TOKEN to the API
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
