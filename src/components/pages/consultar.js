import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import { updateOrderState, getOrders } from "../../services/orden.services";

export default function Consultar({informacion}) {
    const [datos,setDatos]=useState()

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = async (data) =>{
        
        await getOrders()
          .then((response) => {
            let datos=response.data.items;
            let datos_filtrados=datos.filter(e=>e._id===data.codigo)
            setDatos(datos_filtrados);
            console.log(datos_filtrados)
            
          })
          .catch((errors) => {console.log(errors)});
        {/* 
        if (datos1){
            setDatos(...datos1);
        }
        else{
            setDatos(...[])
        }
        */}
        
    }

    return (
        <section className="contact-clean">
        <h1 className="text-center">Consultar orden de despacho</h1>
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group"><span className="input-group-text"><i className="fa fa-search"></i>
            </span><input className="form-control" type="text" placeholder="Codigo" name="codigo" {...register("codigo",{required:true})}/>
            <button className="btn btn-light" type="submit">Buscar</button></div>
            {errors.codigo &&errors.codigo.type==="required" && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
            {datos===undefined && <span className="text-danger text-small d-block mb-2">No se encontro el codigo</span>}

        </form>
        <div className="table-responsive">
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
                    {datos?(
                    <tr>
                    <td>{datos[0]._id}</td>
                    <td>{datos[0].nombre}</td>
                    <td>{datos[0].descripcion}</td>
                    <td>{`${datos[0].product.Hight}-${datos[0].product.Long}-${datos[0].product.Width}`}</td>
                    <td>{datos[0].ports.idPortDeparture.name}</td>
                    <td>{datos[0].ports.idPortDestination.name}</td>
                    <td>{datos[0].stateOrder.state}</td>
                    </tr>
                    ):null
                    }
                    

                </tbody>
            </table>
        </div>
    </section>
    )
}
