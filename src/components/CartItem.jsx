import React from 'react'

const CartItem = ({ item }) => {
  return (
    <li className="cart-item">
      <div className="name">{item.name}</div>
      <div className="quantity">
        <button className="fa fa-minus">
          <i></i>
        </button>
        {item.quantity}
        <button className="fa fa-plus">
          <i></i>
        </button>
      </div>
      <div className="price">${item.price}</div>
      <button className="remove-from-cart"><i className="far fa-times-circle"></i></button>
    </li>

  )
}

export default CartItem