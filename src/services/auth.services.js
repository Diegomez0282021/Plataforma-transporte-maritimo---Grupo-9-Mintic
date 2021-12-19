import axios from "axios";
import './../config';
//http://localhost:3001/api/auth/login
const headers = { "Content-Type": "application/json; charset=utf-8" };

const login = (data) =>
  axios.post(`${global.config.URLAPI}/api/auth/login`, JSON.stringify(data), {
    headers,
  });

const registerUser = (data) =>
  axios.post(`${global.config.URLAPI}/api/auth/register`, data, {
    headers,
  });

const getUser = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get(`${global.config.URLAPI}/api/auth`, { headers });
};

const getUsers = () =>
  axios.get(`${global.config.URLAPI}/api/auth/getUsers`);

export { login, registerUser, getUser, getUsers };