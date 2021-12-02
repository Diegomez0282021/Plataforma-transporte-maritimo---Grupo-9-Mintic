import React from 'react'
import {useForm} from 'react-hook-form';

export default function IngresoPuerto() {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data)       
    }

    return (
        <section className="contact-clean">
            <h1 className="text-center">Ingresar puerto.</h1>
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label" for="nombre_puerto">Nombre del puerto</label>
                <input className="form-control" type="text" name="nombre_puerto" placeholder="Ejemplo: Puerto xyz" {...register("nombrePuerto",{required:true})}/>
                {errors.nombrePuerto && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <label className="form-label" for="ubicacion" >Ubicación</label>
                <input className="form-control" type="number" name="ubicacion" placeholder="Ejemplo: 1200" {...register("ubicacionPuerto",{required:true})}/>
                {errors.nombrePuerto && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <button className="btn btn-primary text-center" type="submit">Aceptar</button></form>
        </section>
        )
}
