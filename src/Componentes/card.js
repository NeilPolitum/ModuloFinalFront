import React from 'react';
import '../Estilos/App.css';

export default function Card() {
  
  return (
    <div className='card'>
      <div className='espacio'>
        <h3 className='boton'>si:</h3>
        <h3 className='boton'>si</h3>
      </div>
      <div className='espacio'>
        <h3 className='boton'>no:</h3>
        <h3 className='boton'>no</h3>
      </div>
      <div className='espacio'>
        <h3 className='boton'>pq:</h3>
        <h3 className='boton'>pq</h3>
      </div>
      <div className='espacio'>
        <h3 className='boton'>aja:</h3>
        <h3 className='boton'>aja</h3>
      </div>
      <div className='espacio'>
        <h3 className='boton'>equisde:</h3>
        <h3 className='boton'>equisde</h3>
      </div>
    </div>
  );
}
