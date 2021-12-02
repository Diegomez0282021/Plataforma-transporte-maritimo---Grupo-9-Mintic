import React from 'react';
import {useForm} from 'react-hook-form';

export default function Consultar() {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data)       
    }

    return (
        <section className="contact-clean">
        <h1 className="text-center">Consultar orden de despacho</h1>
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group"><span className="input-group-text"><i className="fa fa-search"></i>
            </span><input className="form-control" type="number" placeholder="Codigo" name="codigo" {...register("codigo",{required:true})}/>
            <button className="btn btn-light" type="submit">Buscar</button></div>
            {errors.codigo && errors.codigo.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
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
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        <td>Cell 6</td>
                        <td>Cell 6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    )
}
