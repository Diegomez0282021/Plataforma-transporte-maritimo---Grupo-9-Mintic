import React,{Fragment,useEffect,useState,Component} from 'react';
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
import Datos from "./services/data.json";
import MapView from './components/MapView';

function App() {

  const [data,setData]=useState(Datos);
  const current=new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/configurar-valor-milla' element={<ConfigurarValorMilla data={data.valorMilla}/>} />
        <Route path='/ordenes-dia' element={<OrdenesDia datos={data} date={date}/>} />
        <Route path='/aceptar-orden' element={<AceptarOrden/>}/>
        <Route path='/cambiar-estado-orden' element={<CambiaEstado data={data.ordenes}/>}/>
        <Route path="/" exact element={<Landing />} />  
        <Route path="/orden" exact element={<Orden valorMilla={data.valorMilla} puertos={data.puertos}/>} />
        <Route path="/historial" exact element={<Historial datos={data}/>} />
        <Route path="/consultar" exact element={<Consultar informacion={data.ordenes} />} />
        <Route path="/IngPuerto" exact element={<Ingresopuerto/>} />
        <Route path="/map" exact element={<MapView/>} />
        </Routes>
        <Footer />
        
      </Fragment>

    </Router>
  );
}


export default App;
