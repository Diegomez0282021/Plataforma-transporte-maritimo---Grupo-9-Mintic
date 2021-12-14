import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';


const IngresoPuerto = () => {

    const [position, setPosition] = useState({lat:50,lng:50})
    function LocationMarker() {
        
        
        const map = useMapEvents({
            click(e) {
            let arreglo=e.latlng;
            let {lat,lng}=e.latlng;
            arreglo={lat,lng}
            setPosition(...[arreglo])
            }
        })
        
        return position === null ? null : (
            <Marker position={position}>
            <Popup>You are at {position.lat},{position.lng}</Popup>
            </Marker>
        )
        }
    

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        data.longitud=position.lng;
        data.latitud=position.lat;
        console.log(data)       
    }

    return (
        <>
        <section className="contact-clean">
            <h1 className="text-center">Ingresar puerto.</h1>
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label" for="nombre_puerto">Nombre del puerto</label>
                <input className="form-control" type="text" name="nombre_puerto" placeholder="Ejemplo: Puerto xyz" {...register("nombrePuerto",{required:true})}/>
                {errors.nombrePuerto && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <label className="form-label" for="ubicacion" >Ubicación</label>
                <input className="form-control" type="text" name="ubicacion" placeholder="Latitude" value={position.lat}  {...register("latitud",{required:true})}/>
                {errors.latitud && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <input className="form-control" type="text" name="ubicacion" placeholder="Longitud" value={position.lng} {...register("longitud",{required:true})}/>
                {errors.longitud && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <button className="btn btn-primary text-center" type="submit">Aceptar</button>
                </form>
        </section>
        <div className='container'>
        <MapContainer center={[3.879772587462408, -77.07226419465634]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        </MapContainer>
        </div>
    )
        </>
        )
}

export default IngresoPuerto

{/* 
export default function IngresoPuerto() {
    const [position, setPosition] = useState({lat: 50.1 ,lng: 50.1})
    function LocationMarker() {
        
        
        const map = useMapEvents({
            click(e) {
            let {lat,lng}=e.latlng
            setPosition({lat,lng})
            console.log(position)
            }
        })
        
        return position === null ? null : (
            <Marker position={position}>
            <Popup>You are at {position.lat},{position.lng}</Popup>
            </Marker>
        )
        }
    

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data)       
    }

    return (
        <>
        <section className="contact-clean">
            <h1 className="text-center">Ingresar puerto.</h1>
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label" for="nombre_puerto">Nombre del puerto</label>
                <input className="form-control" type="text" name="nombre_puerto" placeholder="Ejemplo: Puerto xyz" {...register("nombrePuerto",{required:true})}/>
                {errors.nombrePuerto && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <label className="form-label" for="ubicacion" >Ubicación</label>
                <input className="form-control" type="text" name="ubicacion" placeholder="Latitude" value={position.lat}  {...register("latitud",{required:true})}/>
                {errors.latitud && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <input className="form-control" type="text" name="ubicacion" placeholder="Longitud" value={position.lng} {...register("longitud",{required:true})}/>
                {errors.longitud && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                <button className="btn btn-primary text-center" type="submit">Aceptar</button></form>
        </section>
        <div className='container'>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        </MapContainer>
        </div>
    )
        </>
        )
}
*/}
