import React from 'react'

export default function Landing() {
    return (
        <section className="highlight-phone">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="intro">
                        <h2>¡Bienvenidos!</h2>
                        <p className="text-start">Nuestra empresa se encarga de transportar mercancías por vía fluvial. Contamos con un buen numero de embarcaciones y transportamos tus contenedores al puerto que mas te convenga.<br/>Regístrate para poder disfrutar de todos nuestros servicios.</p><a className="btn btn-primary" role="button" href="/register">Registrarse</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="d-none d-md-block phone-mockup"><img src="assets/img/kisspng-watercraft-cargo-ship-a-ship-laden-with-cargo-5a9957609ee080.7249956015199988166508%20(1).png" width="300" alt="Imagen-Barco"/></div>
                </div>
                </div>
            </div>
        </section>
    )
}
