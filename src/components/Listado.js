import React from 'react'
import Item from './Item'
import Data from './data.json';
import './Listado.css'

export default function Listado({contador}) {
  return (
    <div className='container'>
      {
        Data.map( item => 
          <Item 
            key={item.id}
            nombre = {item.producto.nombre}
            descripcion = {item.producto.descripcion}
            imagen = {item.producto.imagen}
            stock = {item.stock}
            contador = {contador}
          />
        )   
      }
    </div>
  )
}