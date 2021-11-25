import React from 'react'

export default function ingresoPuerto() {
    return (
        <section className="contact-clean">
            <h1 className="text-center">Ingresar puerto.</h1>
            <form className="text-center">
                <label className="form-label" for="nombre_puerto">Nombre del puerto</label>
                <input className="form-control" type="text" name="nombre_puerto" placeholder="Ejemplo: Puerto xyz"/>
                <label className="form-label" for="ubicacion" >Ubicación</label>
                <input className="form-control" type="number" name="ubicacion" placeholder="Ejemplo: 1200"/>
                <button className="btn btn-primary text-center" type="submit">Aceptar</button></form>
        </section>
        )
}
