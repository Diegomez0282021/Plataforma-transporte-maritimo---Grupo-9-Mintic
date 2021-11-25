import './App.css';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Orden from './components/orden';
import Historial from './components/historial';
import Consultar from './components/consultar';
import Ingresopuerto from './components/ingresoPuerto';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Landing />} />  
        <Route path="/orden" exact element={<Orden/>} />
        <Route path="/historial" exact element={<Historial/>} />
        <Route path="/consultar" exact element={<Consultar />} />
        <Route path="/IngPuerto" exact element={<Ingresopuerto/>} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
