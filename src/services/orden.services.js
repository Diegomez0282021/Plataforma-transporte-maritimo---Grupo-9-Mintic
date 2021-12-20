import axios from "axios";


const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
};

const saveOrden = (data) =>
    
  axios.post("http://localhost:3001/api/order",  JSON.stringify(data), {
    headers,
  });

  const getOrders = () => {
    const headers = {
      Authorization: localStorage.token,
      "Content-Type": "application/json; charset=utf-8",
    };
    return axios.get("http://localhost:3001/api/order", { headers });
};
const getUserId = () => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.get("http://localhost:3001/api/orderByUser/:userID", { headers });
};


const updateOrders = (data) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(`http://localhost:3001/api/order/update`, JSON.stringify(data), {
    headers,
  });
};

const updateOrderState = (data) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(`http://localhost:3001/api/order/updateState`, JSON.stringify(data), {
    headers,
  });
};

const updateStateOrders = (data) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.post(`http://localhost:3001/api/order/updateOrders`, JSON.stringify(data), {
    headers,
  });
};

const deleteOrders = (dato) => {
  const headers = {
    Authorization: localStorage.token,
    "Content-Type": "application/json; charset=utf-8",
  };
  return axios.delete(`http://localhost:3001/api/order/remove`,{ data:dato});
};


export { getOrders, saveOrden,updateOrders,updateOrderState,deleteOrders,getUserId,updateStateOrders };
