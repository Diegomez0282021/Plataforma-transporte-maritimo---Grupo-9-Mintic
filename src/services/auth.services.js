import axios from "axios";

const headers = { "Content-Type": "application/json; charset=utf-8" };

const login = (data) =>
  axios.post("http://localhost:3001/api/auth/login", JSON.stringify(data), {
    headers,
  });

const register = (data) =>
  axios.post("http://localhost:3001/api/auth/register", data, {
    headers,
  });

const getUser = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get("http://localhost:3001/api/auth", { headers });
};

export { login, register, getUser };
