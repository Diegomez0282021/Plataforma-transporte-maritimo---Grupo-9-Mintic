import React,{Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ConfigurarValorMilla from './components/ConfigurarValorMilla';
import OrdenesDia from './components/ordenes-del-dia';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'

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
        </Routes>
        <Footer />
        
      </Fragment>
    </Router>
  );
}

export default App;
