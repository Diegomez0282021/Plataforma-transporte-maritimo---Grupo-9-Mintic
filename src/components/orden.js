import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

export default function Orden({puertos,valorMilla}) {

    const [error,setError]=useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm();

    const getKilometros = (lat1,lon1,lat2,lon2)=>
    {
    const rad = (x) => {return x*Math.PI/180;}
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad( lat2 - lat1 );
    var dLong = rad( lon2 - lon1 );
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d.toFixed(3); //Retorna tres decimales
    }

    const onSubmit = (data) =>{
        
        if (data.destino===data.origen){
            setError(true)
            
        }
        else{
            setError(false)
            data.distancia=getKilometros(puertos[data.origen].latitud,puertos[data.origen].longitud,puertos[data.destino].latitud,puertos[data.destino].longitud)*0.539957;
            data.precio=parseInt(valorMilla*parseFloat(data.distancia))
            console.log(data)  
        }
             
    }
    return (
        <section className="contact-clean">
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">Crear orden de despacho</h2>
                    <div className="mb-3">
                        <input className="form-control" type="text" name="nombre" placeholder="Nombre" {...register("name",{required:true})}/>
                        {errors.name && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    </div>
                    <div className="mb-3"><textarea className="form-control" name="descripcion" placeholder="Descripcion" {...register("descripcion",{required:true})}></textarea></div>
                    {errors.descripcion && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div className="mb-3"><input className="form-control" type="number" placeholder="Peso en Kg" name="peso" {...register("peso",{required:true})}></input></div>
                    {errors.peso  &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div className="mb-3"><input className="form-control" type="number" placeholder="Largo" name="largo" {...register("largo",{required:true})}></input></div>
                    {errors.largo &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div> <input className="form-control" type="number" name="alto" placeholder="Alto" {...register("alto",{required:true})}></input></div><br></br>
                    {errors.alto &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div> <input className="form-control" type="number" placeholder="Ancho" name="Ancho" {...register("ancho",{required:true})}></input></div><br></br>
                    {errors.ancho &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div className="mb-3"><select className="form-select" {...register("origen",{required:true})}>
                            
                                <optgroup label="origen">
                                    <option value="" selected="">-Seleccionar origen-</option>
                                {puertos.map(e=>(
                                    <option value={e.id_puerto}>{e.nombre_puerto}</option>
                                ))}
                                </optgroup>
                            
        
                        </select></div>
                        {errors.origen &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                        {error&& <span className="text-danger text-small d-block mb-2">Origen y destinio deben ser diferentes</span>}
                    <div className="mb-3"><select className="form-select" {...register("destino",{required:true})}>
                            <optgroup label="destino">
                                <option value="" selected="">-Seleccionar destino-</option>
                                {puertos.map(e=>(
                                    <option value={e.id_puerto}>{e.nombre_puerto}</option>
                                ))}
                                
                            </optgroup>
                        </select></div>
                        {errors.destino &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                        {error&& <span className="text-danger text-small d-block mb-2">Origen y destinio deben ser diferentes</span>}
                    <div className="text-center mb-3"><button className="btn btn-primary text-center" type="submit">Enviar</button></div>
                </form>
        </section>

    )
}
