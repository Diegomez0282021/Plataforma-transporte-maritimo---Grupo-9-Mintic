import axios from "axios";

const getOrders = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get("http://localhost:3001/api/order", { headers });
};

const saveOrders = (data) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post("http://localhost:3001/api/order", JSON.stringify(data), {
    headers,
  });
};

export { getOrders, saveOrders };
