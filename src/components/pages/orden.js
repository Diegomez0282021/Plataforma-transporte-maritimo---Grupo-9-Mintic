import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

export default function Orden({puertos,valorMilla}) {

    const [error,setError]=useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm();


    
    function degreesToRadians(degrees){
        return degrees * Math.PI / 180;
    }
     
    
    function getDistanceBetweenPoints(lat1, lng1, lat2, lng2){
        // El radio del planeta tierra en metros.
        let R = 6378137;
        let dLat = degreesToRadians(lat2 - lat1);
        let dLong = degreesToRadians(lng2 - lng1);
        let a = Math.sin(dLat / 2)
                *
                Math.sin(dLat / 2) 
                +
                Math.cos(degreesToRadians(lat1)) 
                * 
                Math.cos(degreesToRadians(lat1)) 
                *
                Math.sin(dLong / 2) 
                * 
                Math.sin(dLong / 2);
    
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let distance = R * c;
    
        return distance;
    }
    const onSubmit = (data) =>{
        
        if (data.destino===data.origen){
            setError(true)
            
        }
        else{
            setError(false)
            data.distancia=getDistanceBetweenPoints(puertos[data.origen-1].latitud,puertos[data.origen-1].longitud,puertos[data.destino-1].latitud,puertos[data.destino-1].longitud)*0.001;
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
                <div className='container'>
                <MapContainer center={[3.879772587462408, -77.07226419465634]} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {puertos.map(e=>(
                    <Marker position={[e.latitud,e.longitud]} >
                        <Popup>{e.nombre_puerto}</Popup>
                    </Marker>
                ))}
                </MapContainer>
                </div>
        </section>

    )
}
