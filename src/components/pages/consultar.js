import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

export default function Consultar({informacion}) {
    const [datos,setDatos]=useState([])

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        let datos1=informacion.filter(e=>e.id_orden===parseInt(data.codigo))
        if (datos1){
            setDatos(...datos1);
        }
        else{
            setDatos(...[])
        }
        
    }

    return (
        <section className="contact-clean">
        <h1 className="text-center">Consultar orden de despacho</h1>
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group"><span className="input-group-text"><i className="fa fa-search"></i>
            </span><input className="form-control" type="number" placeholder="Codigo" name="codigo" {...register("codigo",{required:true})}/>
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
        
                    {datos && 
                    <tr>
                    <td>{datos.id_orden}</td>
                    <td>{datos.nombre}</td>
                    <td>{datos.descripcion}</td>
                    <td>{datos.dimensiones}</td>
                    <td>{datos.origen}</td>
                    <td>{datos.destino}</td>
                    <td>{datos.estado}</td>
                    </tr>
                    }
                    

                </tbody>
            </table>
        </div>
    </section>
    )
}
