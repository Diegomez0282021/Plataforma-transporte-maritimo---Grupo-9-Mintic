import axios from "axios";
import './../config';

const getPort = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get(`${global.config.URLAPI}/api/puerto`, { headers });
};

const savePort = (data) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(`${global.config.URLAPI}/api/puerto`, JSON.stringify(data), {
    headers,
  });
};

export { getPort, savePort };
