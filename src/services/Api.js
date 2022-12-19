import axios from "axios";
import accessToken from "helpers/jwt-token-access/accessToken";

// const http = axios.create({
//     baseURL : "http://localhost:3000/mock-data/",
// });

const http = axios.create({
  baseURL: "https://6375dca77e93bcb006bbc984.mockapi.io/",
});

// const URL = {
//     LOGIN_URL : 'auth.json',
// }

const URL = {
  USERS_URL: "table",
  SIGNUP_URL: "Signup",
  LOGIN_URL: "Login",
  TOKEN_URL: "tokens"
};

// function login(data={}){

//     // return http.post(URL.LOGIN_URL, data);
//     return http.get(URL.LOGIN_URL, data);
// }

function getUser(data = {}) {
  return http.get(URL.USERS_URL, data);
}

function postUser(data = {}) {
  return http.post(URL.USERS_URL, data);
}

function deleteUser(data = {}){
    return http.delete(URL.USERS_URL, data);
}

function postSignup(data = {}){
    return http.post(URL.SIGNUP_URL, data)
}

function postLogin(data = {}){
  return http.get(URL.TOKEN_URL,data)
}

http.interceptors.request.use(config => {
  const token = sessionStorage.getItem('accessToken');
  config.headers.Authorization =  `Bearer ${token}`;
  return config;
});



const api = { postUser, getUser, deleteUser, postSignup, postLogin, http};
// const getApi = {getUser};

export default api;
// export default getApi;
