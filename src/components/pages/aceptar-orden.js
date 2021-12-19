import React,{useEffect,useState} from 'react';
import {getOrders,updateOrders,deleteOrders} from './../../services/orden.services';


const AceptarOrden = () => {
    const [data,setData]=useState([]);
    useEffect(() => {
        getOrders()
          .then((response) => {
            let arreglo=response.data.items;
            console.log(response)
            let datos=arreglo.filter((e)=>!e.state)
            setData(datos);
          })
          .catch((errors) => {console.log(errors)});
        }, []);
    
    const Aceptar=(id)=>{
        console.log(id)
        let change={"_id":id}
        
        updateOrders(change)
        .then((response)=>{
            getOrders()
          .then((response) => {
            let arreglo=response.data.items;
            let datos=arreglo.filter((e)=>!e.state)
            setData(datos);
          })
          .catch((errors) => {console.log(errors)});
        })
        .catch((errors) => {console.log(errors)});
        
    }

    const Eliminar =async (id)=>{
        let change={"id":id}
        console.log(id);
        console.log(change)
        deleteOrders(change)
        .then((response)=>{
            console.log("Eliminado")
            console.log(response)
            getOrders()
          .then((response) => {
            let arreglo=response.data.items;
            let datos=arreglo.filter((e)=>!e.state)
            setData(datos);
          })
          .catch((errors) => {console.log(errors)});
        })
        .catch((errors) => {console.log(errors)});
        
    }


    return (
        <div>
        <section className="contact-clean">
            <h1 className="text-center">Aceptar ordenes</h1>
            <div className="table-responsive" style={{margintop: '30px'}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Dimensiones</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>¿Aceptar?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e)=>(
                        <tr>
                            <td>{e._id}</td>
                            <td>{e.idUser.name}</td>
                            <td>{`${e.product.Hight}m-${e.product.Long}m-${e.product.Width}m`}</td>
                            <td>{e.ports.idPortDeparture.name}</td>
                            <td>{e.ports.idPortDestination.name}</td>
                            <td><a href="#" onClick={()=>Aceptar(e._id)}>Aceptar</a>/<a href="#" onClick={()=>Eliminar(e._id)}>Rechazar</a></td>
                        </tr>    
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </div>
    )
}

export default AceptarOrden

{/* 
export default function aceptarOrden() {
    const [data,setData]=useState([]);
    useEffect(() => {
        getOrders()
          .then((response) => {
            console.log(response);
            setData(response.data.items);
          })
          .catch((errors) => {console.log(errors)});
        }, []);

    return (
    <div>
        <section className="contact-clean">
            <h1 className="text-center">Aceptar ordenes</h1>
            <div className="table-responsive" style={{margintop: '30px'}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Dimensiones</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>¿Aceptar?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 5</td>
                            <td>Cell 6</td>
                            <td><a href="#">Aceptar</a>&nbsp;/&nbsp;<a href="#">Rechazar</a></td>
                        </tr>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 5</td>
                            <td>Cell 6</td>
                            <td><a href="#">Aceptar</a>&nbsp;/&nbsp;<a href="#">Rechazar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
    )
}
*/}