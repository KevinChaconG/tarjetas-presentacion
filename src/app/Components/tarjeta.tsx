import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function Tarjeta(props:Persona) {
  return (
    <div className="tarjetaPersona">

      <p><strong>Id: </strong>{props.id}</p>
      <p><strong>Nombre: </strong>{props.nombre}</p>
      <p><strong>Apellido: </strong>{props.apellido}</p>
      <p><strong>Ocupacion: </strong>{props.ocupacion}</p>
      <p><strong>Pais: </strong>{props.pais}</p>
      
    </div>
  )
}
