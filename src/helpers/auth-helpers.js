//function to receive authentication data from the
//user and save them to LOCAL STORAGE
export const signIn = (data) => {
    //record authenticated user information
    localStorage.setItem('USER_AUTH', JSON.stringify(data));
}

//function to return the TOKEN saved in LOCAL STORAGE
export const getAccessToken = () => {
//reading data written to localstorage
    var data = localStorage.getItem('USER_AUTH');
    //reading data written to localstorage
    var auth = JSON.parse(data);
    //returning the TOKEN
    return auth.accessToken;
}

//function to return the name of the authenticated user
export const getUsuario = () => {
   //returning the TOKEN
    return JSON.parse(localStorage.getItem('USER_AUTH')).name;
    }
  //function to return the name of the authenticated user
export const getIdUsuario = () => {
    //returning the TOKEN
     return JSON.parse(localStorage.getItem('USER_AUTH')).id_user;
     }
   
//function to return the authenticated user's email
    export const getEmail = () => {
    //returning the TOKEN
    return JSON.parse(localStorage.getItem('USER_AUTH')).email;
    }
    //function for user logout
    export const signOut = () => {
    localStorage.removeItem('USER_AUTH');
    }
    
//function to check if the user is authenticated
    export const isAuthenticated = () => {
        //returning the TOKEN
    return localStorage.getItem('USER_AUTH') != null;
    }