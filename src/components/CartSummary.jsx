import React from 'react'
import { useState,useEffect } from 'react'
const CartSummary = ({handleClick, totalValue}) => {


    return (
        <>
            <div className="cart-icon" href="/cart">
                <div className="cart-icon-values">
                    <div className="cart-total">${totalValue}</div>
                    <div className="in-cart-items">5 items</div>
                </div>
                <i className="fas fa-shopping-cart" onClick={handleClick}></i>
            </div>
        </>
    )
}

export default CartSummary