import React, { useState } from 'react';
import '../Estilos/App.css';

export default function NuevaConexion() {

  const [datos, setDatos] = useState({
    aerolinea: '',
    noVuelo: '',
    aeropuerto: '',
  })

  const handleDatos = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={enviarDatos}>
      <div className='enviarDatos'>
        <h1>Nueva Conexión</h1>
        <div className='espacio'>
            <label for="name">Aerolínea:</label>
            <select name="aerolinea" className='input'onChange={handleDatos}>
                <option default>seleccione</option>
                <option value="si">si</option>
                <option value="no">no</option>
            </select>
        </div>
        <div className='espacio'>
            <label for="name">Vuelo:</label>
            <select name="noVuelo" className='input'onChange={handleDatos}>
                <option default>seleccione</option>
                <option value="si">si</option>
                <option value="no">no</option>
            </select>
        </div>
        <div className='espacio'>
            <label for="name">Aeropueto:</label>
            <select name="aeropuerto" className='input'onChange={handleDatos}>
                <option default>seleccione</option>
                <option value="si">si</option>
                <option value="no">no</option>
            </select>
        </div>
        <button type="submit" className='boton'>Nueva Conexión</button>
      </div>
    </form>
  );
}