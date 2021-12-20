import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/user.hook";

export default function Navbar() {
    const auth = useAuth();
    return (
        <>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
            <div className="container" id='navbar1'><img src="assets/img/logo.png" width="70" alt="Logo" /><Link className="navbar-brand" to="/">Compañia Transnaval S.A.S.</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">

                    {!auth?.user ? (
                    <span className="navbar-text actions"> <Link className="login" to="/login">Log In</Link><Link className="btn btn-light action-button" role="button" to="/register">Sign Up</Link></span>
            ) : (
              <>
              <div>
              <ul className="navbar-nav me-auto" id='navbar-2'>
              <li className="nav-item"><Link className="nav-link" to="/orden">Generar Orden</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/historial">Historial</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/consultar">Consultar</Link></li>
                        <li className="nav-item"></li>
                    {auth?.user?.data?.role==="Admin"?(
                        <li className="nav-item dropdown"><Link className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" to="/">Dashboard</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/ingPuerto">Ingresar puerto</Link>
                                <Link className="dropdown-item" to="/configurar-valor-milla">Configurar valor milla nautica</Link>
                                <Link className="dropdown-item" to="/aceptar-orden">Aceptar orden</Link>
                                <Link className="dropdown-item" to="/cambiar-estado-orden">Cambiar estado de orden</Link>
                                <Link className="dropdown-item" to="/ordenes-dia">Ordenes del dia</Link>
                                <Link className="dropdown-item" to="/registrarUsuarioInterno">Registrar usuario interno</Link>
                            </div>
                        </li>
                        
                    )
                    :null}
                <span className="navbar-text actions"><a
                    onClick={() => auth.signout(() => window.location.reload())}
                    className="btn btn-light action-button"
                  >
                    Salir
                  </a></span>
                  </ul>
                  </div>
              </>
              
            )}
            
                    
                </div>
            </div>
        </nav>
        </>
    )
}
