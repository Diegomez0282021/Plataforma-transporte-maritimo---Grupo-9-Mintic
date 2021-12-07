import React from 'react';
import {useForm} from 'react-hook-form';


function ConfigurarValorMilla() {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data)       
    }

    return (
        <section className="contact-clean">
            <h1 className="text-center">Configurar valor de milla náutica</h1>
            <form  className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label text-dark" for="valor_actual">Valor actual</label>
                <input className="form-control" type="number" name="valor_actual" readonly="" value="1000"/>
                <label className="form-label" for="nuevo_valor" style={{margin: "20px"}}>Nuevo valor</label>
                <input className="form-control" type="number" name="nuevo_valor" placeholder="Ejemplo: 1200" {...register("valorMilla",{required:true, min:1})}/>
                {errors.valorMilla && errors.valorMilla.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                {errors.valorMilla && errors.valorMilla.type === "min" &&<span className="text-danger text-small d-block mb-2">Este campo debe ser mayor a 1</span>}
                <button className="btn btn-primary text-center" type="submit">Aceptar</button>
            </form>
        </section>
    )
}

export default ConfigurarValorMilla

