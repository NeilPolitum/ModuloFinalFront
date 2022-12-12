import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Estilos/App.css';
// import axios from 'axios';

export default function NuevoVuelo() {
  // const baseURLAerolinea = "http://localhost:3080/empleado/consultar/"
  // const baseURLAeropuerto = "http://localhost:3080/empleado/consultar/"
  // const baseURLPiloto = "http://localhost:3080/empleado/consultar/"

  var labelsAero = []
  const baseURL= 'http://localhost:8089/transactional/createFlight/';
  const [codeAero, setCodeAero] = useState([])
  const [datos, setDatos] = useState({
    airlineCode: '',
    flightNumber: '',
    airports: codeAero,
    pilotId: '',
    flightTime: '',
  })
  const [segmentos, setSegmentos] = useState(1)
  console.log("segmento",segmentos)

  const [aerolineas, setAerolineas] = useState([
    {
      code: "W3",
      name: "latam"
    },
    {
      code: "W4",
      name: "vivaair"
    },
    {
      code: "W5",
      name: "lufthansa"
    }
  ])
  const [pilotos, setPilotos] = useState([
    {
      licence: "",
      airline: {
        code: "W3",
        name: "latam"
      },
      name: "Daniel Rubiano",
      expiration: "2025-12-31 09:07:46"
    },
    {
      licence: "",
      airline: {
        code: "W3",
        name: "latam"
      },
      name: "Daniel Rubiano 2",
      expiration: "2025-12-31 09:07:46"
    },
    {
      licence: "",
      airline: {
        code: "W4",
        name: "vivaair"
      },
      name: "Daniel Rubiano 3",
      expiration: "2025-12-31 09:07:46"
    },
    {
      licence: "",
      airline: {
        code: "W5",
        name: "lufthansa"
      },
      name: "Daniel Rubiano 4",
      expiration: "2025-12-31 09:07:46"
    },
  ])
  const [aeropuertos, setAeropuertos] = useState([
    {
      code: "AID",
      name: "Internacional el dorado",
      place: {
        code: "BOG",
        name: "Bogotá",
        type: "Ciudad"
      }
    },
    {
      code: "AIM",
      name: "Internacional Medellin",
      place: {
        code: "MED",
        name: "Medellin",
        type: "Ciudad"
      }
    },
    {
      code: "AIM",
      name: "Internacional Madrid",
      place: {
        code: "MAD",
        name: "Madrid",
        type: "Ciudad"
      }
    },
  ])

  // useEffect(() => {
  //   axios.get(baseURLAerolinea).then((r) => {
  //     setAerolineas(r.data);
  //   })
  //   axios.get(baseURLAeropuerto).then((r) => {
  //     setAeropuertos(r.data)
  //   })
  // }, [aerolineas, aeropuertos])

  // useEffect(() => {
  //   axios.get(baseURLPiloto+datos.aerolinea).then((r) => {
  //     setPilotos(r.data)
  //   })
  // }, [pilotos, datos.aerolinea])

  /* useEffect(() => {
    crearAeropuertos()
  }, [segmentos]) */

  const handleDatos = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const handleSegments = (event) => {
    setSegmentos(event.target.value);
  }
  

  const enviarDatos = (event) => {
    event.preventDefault();
    axios.post(baseURL,datos);
  }  
  
  function crearAeropuertos() {
    labelsAero=[];
    for(let i=0; i<=segmentos; i++){
      labelsAero.push(
        <div className='espacio'>
          <label for="name">{`Aeropuerto #${i+1}:`}</label>
          <select name={"aeropuerto"+i} className='input'onChange={handleDatos}>
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
          <input type="text" onChange={handleDatos} name="noVuelo" className='input' disabled defaultValue={1}/>
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
          <select name="piloto" className='input'onChange={handleDatos}>
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