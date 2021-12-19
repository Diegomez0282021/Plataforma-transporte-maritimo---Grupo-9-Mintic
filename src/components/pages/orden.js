import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useOrden } from "../../hooks/orden.hook";
import { useAuth } from "../../hooks/user.hook";
import { getPort } from "../../services/puerto.services";
import { getUser} from "../../services/auth.services";


export default function Orden({valorMilla}) {
        
    const [ports, setPorts] = useState();
    const [usuario, setUsuario] = useState();
    
    const [error,setError]=useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm();
    const Orden = useOrden();
    const auth = useAuth();
    const idUser=auth.user.data?.id    
   
    
    useEffect(() => {
        getPort().then(({ data }) => {
            
          setPorts(data.items);
        });
        getUser({}).then(({ data }) => {
            console.log(data)
            console.log(data.item.data,'data.itemss')     
          setUsuario(data.item);

       
        });
    }, []);

    
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
        console.log(data) 
        Orden.post(data, () => {
            window.location.reload();});
        
    
    }
    return (
        <section className="contact-clean">
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">Crear orden de despacho</h2>
                    <div className="mb-3">
                        <input className="form-control" type="text" name="nombre" placeholder="Nombre" {...register("nombre",{required:true})}/>
                        {errors.name && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    </div>
                    <div className="mb-3"><textarea className="form-control" name="descripcion" placeholder="Descripcion" {...register("descripcion",{required:true})}></textarea></div>
                    {errors.descripcion && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div className="mb-3"><input className="form-control" type="number" placeholder="Cantidad" name="cantidad" {...register("invoice.amount",{required:true})}></input></div>
                    {errors.peso  &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div className="mb-3"><input className="form-control" type="number" placeholder="Peso en Kg" name="peso" {...register("product.Weight",{required:true})}></input></div>
                    {errors.peso  &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div className="mb-3"><input className="form-control" type="number" placeholder="Largo" name="largo" {...register("product.Long",{required:true})}></input></div>
                    {errors.largo &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div> <input className="form-control" type="number" name="alto" placeholder="Alto" {...register("product.Hight",{required:true})}></input></div><br></br>
                    {errors.alto &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    <div> <input className="form-control" type="number" placeholder="Ancho" name="Ancho" {...register("product.Width",{required:true})}></input></div><br></br>
                    {errors.ancho &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    
                    <div className="mb-3"><select className="form-select" {...register(`ports.idPortDeparture`)}>
                                
                          <option value="">-Seleccionar origen-</option>
                          {ports
                            ? ports.map((c) => (
                             <option value={c._id}>{c.name}</option>
                            ))
                            : null}
                        </select>

                       </div>
                        {/* {errors.origen &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>} */}
                        {/* {error&& <span className="text-danger text-small d-block mb-2">Origen y destino deben ser diferentes</span>} */}
                    <div className="mb-3"><select className="form-select" {...register("ports.idPortDestination",{required:true})}>
                            <option value="">-Seleccionar origen-</option>
                          {ports
                            ? ports.map((c) => (
                             <option value={c._id}>{c.name}</option>
                            ))
                            : null}
                        </select></div>
                        {/* {errors.destino &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>} */}
                        {/* {error&& <span className="text-danger text-small d-block mb-2">Origen y destino deben ser diferentes</span>} */}
                        <div  class="d-none d-md-done d-lg-none">
                            <input className="form-control" type="text" placeholder={`${idUser}`} name="Ancho" value={`${idUser}`} {...register("idUser")}/>
                                                  
                        </div>            
                    <div className="text-center mb-3"><button className="btn btn-primary text-center" type="submit">Enviar</button></div>
                </form>
                <div className='container'>
                <MapContainer center={[3.879772587462408, -77.07226419465634]} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {ports
                            ? ports.map((e) => (
                                <Marker position={[e.latitud,e.longitud]} >
                                <Popup>{e.name}</Popup>
                                </Marker>
                                
                            ))
                            
                            : null}
                            </MapContainer>
                
                
                </div>
        </section>

    )
}
