import axios from "axios";

const getPort = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get("http://localhost:3001/api/puerto", { headers });
};

const savePort = (data) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post("http://localhost:3001/api/puerto", JSON.stringify(data), {
    headers,
  });
};

export { getPort, savePort };
