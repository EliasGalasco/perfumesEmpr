import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EstructureCard from '../estructureCard/EstructureCard'

const ItemList = (props) => {
  return (
    <div className='container-fluid row d-inline-flex justify-content-center'>
            {props.products.map((producto)=>(
                <EstructureCard
                key={producto.id}
                id={producto.id}
                titulo={producto.titulo}
                detalle={producto.detalle}
                imagen={producto.imagen}
                precio={producto.precio}
                stock={producto.stock}
                discount={producto.discount}
                cantidad={producto.cantidad}
            />
        ))}
    </div>
  )
}

export default ItemList