import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import './Estilos/App.css'
import Home from './Componentes/home';
import NuevaConexion from './Componentes/nuevaConexion';
import NuevoVuelo from './Componentes/nuevoVuelo';
import Reportes from './Componentes/reportes';

function App() {

  const estilo = {
    color: 'white'
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className='enlaces'>
            <NavLink style={estilo} to="/nuevo-vuelo"><li>NUEVO VUELO</li></NavLink>
            <NavLink style={estilo} to="/nueva-conexion"><li>NUEVA CONEXIÓN</li></NavLink>
            <NavLink style={estilo} to="/reportajes"><li>REPORTES</li></NavLink>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nuevo-vuelo" exact element={<NuevoVuelo />} />
          <Route path="/nueva-conexion" exact element={<NuevaConexion />} />
          <Route path="/reportajes" exact element={<Reportes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
