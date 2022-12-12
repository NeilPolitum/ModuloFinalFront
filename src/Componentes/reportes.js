import React, { useState } from 'react';
import Card from './card';
import '../Estilos/App.css';

export default function NuevaConexion() {

  const [datos, setDatos] = useState({
    origen: '',
    fecha: '',
  })
  const itinerario = 1;

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
        <h1>Reportes</h1>
        <div className='espacio'>
          <label for="name">Origen:</label>
          <select name="origen" className='input'onChange={handleDatos}>
            <option default>seleccione</option>
            <option value="si">si</option>
            <option value="no">no</option>
          </select>
        </div>
        <div className='espacio'>
          <label for="name">Fecha:</label>
          <input type="date" onChange={handleDatos} name="fecha" className='input'/>
        </div>
        <button type="submit" className='boton'>Consultar</button>
      </div>
      <div className='enviarDatos'>
        <h1>Itinerario No.{itinerario}</h1>
        <div className='espacio'>
          <h2>Trayectoria</h2>
          <Card/>
        </div>
      </div>
    </form>
  );
}