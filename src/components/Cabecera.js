import React from 'react'
import './Cabecera.css'
import imagen from '../images/carrito.png'

export default function Cabecera({compras}) {
  
  return (
    <header>
        <h1> Carrito de compras</h1>        
        <p> Productos <img src={imagen} alt='carrito'></img> <span> {compras} </span></p>        
    </header>
  )
}
