import React from 'react'
import { useState, useEffect } from 'react';
import CartItem from './CartItem'


const Cart = ({ items }) => {

  const currentTotal = JSON.parse(localStorage.getItem('totalValue'));

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    //re-calculate total when items changed
    setTotalValue(items.reduce((total, currItem) => total + currItem.price, 0));  
    localStorage.setItem('totalValue', currentTotal)
  }, [items])


//data-toggle={toggleValue} onClick={ClickCart}

  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map(item => <CartItem key={item.id} item={item} />)}
      </ul>
      <div className="total">Total: ${totalValue}</div>
  
    </aside>
  )
}

export default Cart