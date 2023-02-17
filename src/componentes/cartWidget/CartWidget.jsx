import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useContext } from 'react';
import { cartContext } from '../../storage/cartContext';

function CartWidget() {
  const {totalItems} = useContext(cartContext)
  return (
    <span>
      <FontAwesomeIcon className='w-16 carrito' icon={faCartShopping}/>
    {totalItems() !== 0 && totalItems() }</span>
  )
}

export default CartWidget