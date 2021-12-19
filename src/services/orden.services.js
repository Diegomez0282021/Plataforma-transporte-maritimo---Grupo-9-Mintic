import axios from "axios";

const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
};

const saveOrden = (data) =>
    
  axios.post("http://localhost:3001/api/order",  JSON.stringify(data), {
    headers,
  });

export { saveOrden };
