import React, { useEffect, useState } from "react";
import { saveOrden,getUserId} from "./../services/orden.services";



let OrdenContext = React.createContext(null);

const OrdenProvider = ({ children }) => {
  let [orden, setOrden] = useState();
   
    let post = async(datos) => {
      const { data } = await saveOrden(datos)
      setOrden(datos);
      //callback();
    };
    let getUserIds = async(datos) => {
      const { data } = await getUserId(datos)
      console.log(data,'provider')
      console.log(`'${datos}'`,'pppppp')
      setOrden(datos);
      
    };
  

    let value = { orden, post,getUserIds };
    return <OrdenContext.Provider value={value}>{children}</OrdenContext.Provider>;

};
export { OrdenProvider, OrdenContext };