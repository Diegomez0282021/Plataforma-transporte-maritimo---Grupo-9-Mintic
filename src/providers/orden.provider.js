import React, { useEffect, useState } from "react";
import { saveOrden} from "./../services/orden.services";



let OrdenContext = React.createContext(null);

const OrdenProvider = ({ children }) => {
  let [orden, setOrden] = useState();
   
    let post = async(datos) => {
      const { data } = await saveOrden(datos)
      console.log(data)
      console.log(data.item)
      console.log(datos)
      setOrden(datos);
      //callback();
    };
  

    let value = { orden, post };
    return <OrdenContext.Provider value={value}>{children}</OrdenContext.Provider>;

};
export { OrdenProvider, OrdenContext };