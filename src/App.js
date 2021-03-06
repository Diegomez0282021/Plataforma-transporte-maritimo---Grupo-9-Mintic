import React,{Fragment,useState} from 'react';
import { BrowserRouter as Router,Routes ,Route, useLocation, Navigate} from 'react-router-dom';
import './App.css';

import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ConfigurarValorMilla from './components/pages/ConfigurarValorMilla';
import OrdenesDia from './components/pages/ordenes-del-dia';
import AceptarOrden from './components/pages/aceptar-orden';
import CambiaEstado from './components/pages/cambiar-estado-orden';
import Orden from './components/pages/orden';
import Historial from './components/pages/historial';
import Consultar from './components/pages/consultar';
import Ingresopuerto from './components/pages/ingresoPuerto';
import RegistrarUsuarioInterno from './components/pages/RegistrarUsuarioInterno';
import Factura from './components/pages/Factura';

import Datos from "./services/data.json";
import { AuthProvider } from "./providers/user.provider";
import { OrdenProvider } from "./providers/orden.provider";
import { useAuth } from "./hooks/user.hook";
import AppLayout from "./components/layouts/app.layout";
 

function App() {

  const [data]=useState(Datos);
  const current=new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

function RequireUser({ children }) {
    let auth = useAuth();
    let location = useLocation();
    if (!auth.user) {
      return <Navigate to="/" state={{ from: location }} />;
    }
    return children;
}
  

  return (
    <AuthProvider>
    <OrdenProvider>
    
    <Router >
      <Fragment>
      <Routes >
      <Route element={<AppLayout />}>
       
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/configurar-valor-milla' element={<ConfigurarValorMilla data={data.valorMilla} date={date}/>} />
        <Route path='/ordenes-dia' element={<OrdenesDia datos={data} date={date}/>} />
        <Route path='/aceptar-orden' element={<AceptarOrden/>}/>
        <Route path='/cambiar-estado-orden' element={<CambiaEstado data={data.ordenes}/>}/> 
        <Route path="/orden"  element={<Orden valorMilla={data.valorMilla} puertos={data.puertos}/>} />
        <Route path="/historial"  element={<Historial />} />
        <Route path="/consultar"  element={<Consultar informacion={data.ordenes} />} />
        <Route path="/ingPuerto" element={<Ingresopuerto/>} />
        <Route path="/registrarUsuarioInterno" exact element={<RegistrarUsuarioInterno/>} />
        <Route exact path="/Factura/:id" element={<RequireUser><Factura/></RequireUser>} />
        
      </Route>
      </Routes>  
      </Fragment>

    </Router>
    
    </OrdenProvider>
    </AuthProvider>
  );
}


export default App;
