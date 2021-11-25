import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
        <div className="container"><img src="assets/img/logo.png" width="70" alt="Logo"/><a className="navbar-brand" href="/">Compañia Transnaval S.A.S.</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><Link className="nav-link" to="/orden">Generar Orden</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/historial">Historial</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/consultar">Consultar</Link></li>
                    <li className="nav-item"></li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="/">Dashboard</a>
                        <div className="dropdown-menu"><Link className="dropdown-item" to="/IngPuerto">Ingresar puerto</Link><a className="dropdown-item" href="configurar-valor-milla.html">Configurar valor milla nautica</a><a className="dropdown-item" href="aceptar-orden.html">Aceptar orden</a><a className="dropdown-item" href="cambiar-estado.html">Cambiar estado de orden</a><a className="dropdown-item" href="ordenes-dia.html">Ordenes del dia</a></div>
                    </li>
                    </ul><span className="navbar-text actions"> <a className="login" href="login.html">Log In</a><a className="btn btn-light action-button" role="button" href="register.html">Sign Up</a></span>
                </div>
            </div>
        </nav>
    )
}
