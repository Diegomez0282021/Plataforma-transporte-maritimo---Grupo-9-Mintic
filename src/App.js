import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ConfigurarValorMilla from './components/ConfigurarValorMilla';
import OrdenesDia from './components/ordenes-del-dia';
import AceptarOrden from './components/aceptar-orden';
import CambiaEstado from './components/cambiar-estado-orden';
import Orden from './components/orden';
import Historial from './components/historial';
import Consultar from './components/consultar';
import Ingresopuerto from './components/ingresoPuerto';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/configurar-valor-milla' element={<ConfigurarValorMilla/>} />
        <Route path='/ordenes-dia' element={<OrdenesDia/>} />
        <Route path='/aceptar-orden' element={<AceptarOrden/>}/>
        <Route path='/cambiar-estado-orden' element={<CambiaEstado/>}/>
        <Route path="/" exact element={<Landing />} />  
        <Route path="/orden" exact element={<Orden/>} />
        <Route path="/historial" exact element={<Historial/>} />
        <Route path="/consultar" exact element={<Consultar />} />
        <Route path="/IngPuerto" exact element={<Ingresopuerto/>} />
        </Routes>
        <Footer />
        
      </Fragment>

    </Router>
  );
}


export default App;
