import axios from "axios";
import './../config';

const getConfigValue = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get(`${global.config.URLAPI}/api/configValue`, { headers });
};

const saveConfigValue = (data) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(`${global.config.URLAPI}/api/configValue`, JSON.stringify(data), {
    headers,
  });
};

const updateConfigValue = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(`${global.config.URLAPI}/api/configValue/update`, { headers });
};

export { getConfigValue, saveConfigValue,updateConfigValue };