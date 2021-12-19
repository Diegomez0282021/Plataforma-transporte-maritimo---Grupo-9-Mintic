import axios from "axios";
import './../config';

const getUser = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get(`${global.config.URLAPI}/api/auth`, { headers });
};

// const saveOrders = (data) => {
//   const headers = {
//     Authorization: localStorage.token,
//     "Content-Type": "application/json; charset=utf-8",
//   };
//   return axios.post("http://localhost:3001/api/order", JSON.stringify(data), {
//     headers,
//   });
// };

export { getUser };
