import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import '../Estilos/App.css';
import moment from 'moment/moment';

export default function NuevoVuelo() {
  const baseURLAerolinea = "http://localhost:8089/airline/"
  const baseURLAeropuerto = "http://localhost:8089/airport/"
  const baseURLPiloto = "http://localhost:8089/pilot/"
  const baseURL= 'http://localhost:8089/transactional/createFlight/';

  var labelsAero = []
  const currentTimeDate = new Date();
  const timeWithFormat = moment(currentTimeDate).format("YYYY-MM-DD hh:mm:ss")
  const [codeAero, setCodeAero] = useState([])
  const [datos, setDatos] = useState({
    airlineCode: '',
    flightNumber: '',
    airports: codeAero,
    pilotId: '',
    flightTime: timeWithFormat,
  })
  const [segmentos, setSegmentos] = useState(1)
  const [aerolineas, setAerolineas] = useState([])
  const [pilotos, setPilotos] = useState([])
  const [aeropuertos, setAeropuertos] = useState([])

  useEffect(() => {
    axios.get(baseURLAerolinea).then((r) => {
      setAerolineas(r.data.data);
    })
    axios.get(baseURLAeropuerto).then((r) => {
      setAeropuertos(r.data.data)
    })
  }, [aerolineas, aeropuertos])

  useEffect(() => {
    axios.get(baseURLPiloto+datos.airlineCode).then((r) => {
      setPilotos(r.data.data)
    })
  }, [pilotos, datos.airlineCode])

  const handleDatos = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const handleSegments = (event) => {
    setSegmentos(event.target.value);
  }

  const handleCodigosA = (event) => {
    setCodeAero([...codeAero, event.target.value])
  }

  const enviarDatos = (event) => {
    console.log("datos",datos)
    event.preventDefault();
    axios.post(baseURL,datos);
    toast("Registro completado")
  }  
  
  function crearAeropuertos() {
    labelsAero=[];
    for(let i=0; i<=segmentos; i++){
      labelsAero.push(
        <div className='espacio'>
          <label for="name">{`Aeropuerto #${i+1}:`}</label>
          <select name={"aeropuerto"+i} className='input'onChange={handleCodigosA}>
            <option default>seleccione</option>
            {aeropuertos.map((aeropuerto, key) => (
              <option value={aeropuerto.code} key={key}>{aeropuerto.name}</option>
            ))}
          </select>
        </div>
      )
    }
  }

  crearAeropuertos();

  return (
    <form onSubmit={enviarDatos}>
      <div className='enviarDatos'>
        <h1>Nuevo Vuelo</h1>
        <div className='espacio'>
          <label for="airlineCode">Aerolínea:</label>
          <select name="airlineCode" className='input' onChange={handleDatos}>
            <option default>seleccione</option>
            {aerolineas.map((aerolinea) => (
              <option value={aerolinea.code} name="">{aerolinea.name}</option>
            ))}
          </select>
        </div>
        <div className='espacio'>
          <label for="name">Vuelo:</label>
          <input type="text" onChange={handleDatos} name="flightNumber" className='input' disabled defaultValue={1}/>
        </div>
        <div className='espacio'>
          <label for="name">Segmentos:</label>
          <select name="segmentos" className='input'onChange={handleSegments}>
            <option value={1} default>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className='espacioLabels'>
        {labelsAero}
        </div>
        <div className='espacio'>
          <label for="name">Piloto:</label>
          <select name="pilotId" className='input'onChange={handleDatos}>
            <option default>seleccione</option>
            {pilotos.map((piloto, key) => (
              <option value={piloto.code} key={key}>{piloto.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className='boton'>Nuevo Vuelo</button>
      </div>
    </form>
  );
}