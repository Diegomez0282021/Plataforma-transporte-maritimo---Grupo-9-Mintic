import React, {  useState , setResult} from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    nombreOrden: yup.string().required().min(3).label('Nombre'),
    DescripcionOrden: yup.string(),
    pesoOrden: yup.number().required().label('peso'),
    largoOrden: yup.number().required().label('largo'),
    altoOrden: yup.number().required().label('alto'),
    anchoOrden: yup.number().required().label('ancho'),
    origenOrden: yup.string().required().label('origen'),
    destinoOrden: yup.string().required().label('destino'),

  }).required();


const Orden = () => {

    const [character, setCharacter] = useState();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    //const onSubmit = (data) => setCharacter(JSON.stringify(data));
    const onSubmit = (data) => console.log(data);
    

    return (
        <section className="contact-clean">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center">Crear orden de despacho</h2>
                <div className="mb-3">
                    <input className="form-control" type="text" name="nombre" placeholder="Nombre" {...register("nombreOrden")} />
                    <p className="text-danger">{errors.nombreOrden?.message}</p>
                </div>
                <div className="mb-3"><textarea className="form-control" name="descripcion" placeholder="Descripcion" {...register("descripcionOrden")}/></div>
                <div className="mb-3"><input className="form-control" type="number" placeholder="Peso en Kg" name="peso" {...register("pesoOrden")}/></div>
                <div className="mb-3"><input className="form-control" type="number" placeholder="Largo" name="largo" {...register("largoOrden")}/></div>
                <div> <input className="form-control" type="number" name="alto" placeholder="Alto" {...register("altoOrden")}/></div><br></br>
                <div> <input className="form-control" type="number" placeholder="Ancho" name="Ancho" {...register("anchoOrden")}/></div><br></br>

                <div className="mb-3">
                    <select className="form-select" defaultValue={'DEFAULT'} {...register("origenOrden")}>
                        <option value="DEFAULT" disabled>-Seleccionar destino-</option>

                        <option value="131">This is item 2</option>
                        <option value="141">This is item 3</option>

                </select></div>
                <div className="mb-3">
                    <select className="form-select" defaultValue={'DEFAULT'} {...register("destinoOrden")}>
                        <option value="DEFAULT" disabled>-Seleccionar destino-</option>
                        <option value="13">This is item 2</option>
                        <option value="14">This is item 3</option>

                </select></div>
                <div className="text-center mb-3"><button className="btn btn-primary text-center" type="submit">Enviar</button></div>
            </form>
        </section>

    )
}

export default Orden;