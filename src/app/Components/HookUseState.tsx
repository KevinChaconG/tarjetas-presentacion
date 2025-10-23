'use client'
import React, { useState } from 'react'

export default function HookUseState() {

    const [contador, setContador]=useState<number>(0)

    const [nombre, setNombre]=useState<string | null>('');

    function sumarContador():void{
        setContador(contador+1)
    }

    function restarContador():void{
        setContador(contador-1)
    }

  return (
    <div>

        El valor del contador es: {contador}

        <br></br>
        <br></br>

        <button onClick={sumarContador}>Sumar Contador</button>
        <br></br>
        <button onClick={restarContador}>Restar Contador</button>
      
    </div>
  )
}
