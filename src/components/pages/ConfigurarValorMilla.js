import React,{useEffect,useState} from 'react';
import {useForm} from 'react-hook-form';
import {updateConfigValue,getConfigValue,saveConfigValue} from './../../services/valorMillas.services';


function ConfigurarValorMilla({data,date}) {

    const {register,handleSubmit,formState:{errors}} = useForm();
    const [valor, setValor] = useState([])

    useEffect(() => {
        getConfigValue()
          .then((response) => {
            setValor(response.data.items.value);
          })
          .catch((errors) => {console.log(errors)});
        }, []);

    const onSubmit = async (data) =>{
        console.log(data);
        data.date=date;
        const { actualizar } =await updateConfigValue();
        const { datos } = await saveConfigValue(data);
        alert("Se actualizo el valor ")
    }

    return (
        <section class="contact-clean">
            <h1 class="text-center">Configurar valor de milla náutica</h1>
            <form  class="text-center" onSubmit={handleSubmit(onSubmit)}>
                <label class="form-label text-dark" for="valor_actual">Valor actual</label>
                <input class="form-control" type="number" name="valor_actual" readonly="" value={valor}/>
                <label class="form-label" for="nuevo_valor" style={{margin: "20px"}}>Nuevo valor</label>
                <input class="form-control" type="number" name="nuevo_valor" placeholder="Ejemplo: 1200" {...register("value",{required:true, min:1})}/>
                {errors.value && errors.value.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                {errors.value && errors.value.type === "min" &&<span className="text-danger text-small d-block mb-2">Este campo debe ser mayor a 1</span>}
                <button className="btn btn-primary text-center" type="submit">Aceptar</button>
            </form>
        </section>
    )
}

export default ConfigurarValorMilla

