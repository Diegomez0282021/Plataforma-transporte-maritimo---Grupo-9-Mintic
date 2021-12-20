import React,{useEffect,useState} from 'react';
import {getOrders,updateOrders,deleteOrders,updateStateOrders} from './../../services/orden.services';
import { useOrden } from "../../hooks/orden.hook";




export default function CambiarEstadoOrden({data}) {
    const [data1,setData1]=useState();
    const Orden = useOrden();
    
    
    const guardar =async () =>{
        for (let i=0;i<data1.length; i++){
            let consulta={"id":data1[i]._id,"state":data1[i].stateOrder.state}
            await updateStateOrders(consulta)
            .then((response)=>{
            }).catch((errors) => {console.log(errors)})

            
    }
    alert("Se actualizaron los campos")
}
    

    const handleChange=(e)=>{

        let cambio=e.target.value.split(",")
        const elementsIndex = data1.findIndex(element => element._id === cambio[1] )
        let newArray = [...data1]
        let newStateOrder=newArray[elementsIndex].stateOrder
        newStateOrder.state=cambio[0]
        newArray[elementsIndex] = {...newArray[elementsIndex], stateOrder:newStateOrder}
        setData1(...[newArray])
    }

    useEffect(() => {
        getOrders()
          .then((response) => {
            let arreglo=response.data.items;
            let datos=arreglo.filter((e)=>e.stateOrder.state!=="Pendiente")
            setData1(datos);
            console.log(datos)
          })
          .catch((errors) => {console.log(errors )});
        }, []);

    return (
    <div>
        <section classNameName="contact-clean">
            <h1 className="text-center">Cambiar estado de ordenes</h1>
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
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {data1?.map(e=>(
                            <tr>
                            <td>{e._id}</td>
                            <td>{e.nombre}</td>
                            <td>{e.descripcion}</td>
                            <td>{`${e.product.Hight}-${e.product.Long}-${e.product.Width}`}</td>
                            <td>{e.ports.idPortDeparture.name}</td>
                            <td>{e.ports.idPortDestination.name}</td>
                            <td>&nbsp;<select onChange={handleChange}>
                            {e.stateOrder.state==="Pendiente"&& 
                                <optgroup label="opciones">
                                    <option value={`Pendiente,${e._id}`} selected>Pendiente</option>
                                    <option value={`Pendiente a envio,${e._id}`}>Pendiente a envio</option>
                                    <option value={`Despachada,${e._id}`}>Despachada</option>
                                    <option value={`Finalizada,${e._id}`}>Finalizada</option>
                                    <option value={`Cancelada,${e._id}`}>Cancelada</option>
                                </optgroup>
                            }
                            {e.stateOrder.state==="Pendiente a envio"&& 
                                <optgroup label="opciones">
                                    <option value={`Pendiente,${e._id}`}>Pendiente</option>
                                    <option value={`Pendiente a envio,${e._id}`} selected>Pendiente a envio</option>
                                    <option value={`Despachada,${e._id}`}>Despachada</option>
                                    <option value={`Finalizada,${e._id}`}>Finalizada</option>
                                    <option value={`Cancelada,${e._id}`}>Cancelada</option>
                                </optgroup>
                            }
                            {e.stateOrder.state ==="Despachada" &&
                            <optgroup label="opciones">
                                <option value={`Pendiente,${e._id}`}>Pendiente</option>
                                <option value={`Pendiente a envio,${e._id}`}>Pendiente a envio</option>
                                <option value={`Despachada,${e._id}`} selected>Despachada</option>
                                <option value={`Finalizada,${e._id}`}>Finalizada</option>
                                <option value={`Cancelada,${e._id}`}>Cancelada</option>
                            </optgroup>
                            }
                            {e.stateOrder.state ==="Finalizada" &&
                            <optgroup label="opciones">
                                <option value={`Pendiente,${e._id}`}>Pendiente</option>
                                <option value={`Pendiente a envio,${e._id}`}>Pendiente a envio</option>
                                <option value={`Despachada,${e._id}`}>Despachada</option>
                                <option value={`Finalizada,${e._id}`} selected>Finalizada</option>
                                <option value={`Cancelada,${e._id}`}>Cancelada</option>
                            </optgroup>
                            }
                            {e.stateOrder.state ==="Cancelada" &&
                            <optgroup label="opciones">
                                <option value={`Pendiente,${e._id}`}>Pendiente</option>
                                <option value={`Pendiente a envio,${e._id}`}>Pendiente a envio</option>
                                <option value={`Despachada,${e._id}`} >Despachada</option>
                                <option value={`Finalizada,${e._id}`}>Finalizada</option>
                                <option value={`Cancelada,${e._id}`} selected>Cancelada</option>
                            </optgroup>
                            }
                                </select></td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
            <div className="buttons">
                <button className="btn btn-primary" type="button" onClick={()=>guardar()} >GUARDAR CAMBIOS</button>             
                <button className="btn btn-danger" type="button" >ELIMINAR CAMBIOS</button>
             </div>
        </section>
    </div>
    )
}
