import axios from "axios";

const headers = { "Content-Type": "application/json; charset=utf-8" };

const login = (data) =>
  axios.post({...process.env.API_ROUTER+'/auth/login'}, JSON.stringify(data), {
    headers,
  });

const register = (data) =>
  axios.post({...process.env.API_ROUTER+'auth/register'}, data, {
    headers,
  });

const getUser = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get({...process.env.API_ROUTER+'/auth'}, { headers });
};

export { login, register, getUser };
