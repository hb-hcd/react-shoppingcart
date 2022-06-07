import React from 'react'

const Item = ({ item, addNewItem }) => {
  return (
    <li className="item">
      <img src={item.imageURL} alt={item.name} />
      <h2>{item.name}</h2>
      <div className="price">${item.price}</div>
      <div className="description">
        {item.description}
      </div>
      <button onClick={()=>addNewItem({id:item.id,name:item.name,price:item.price})}>Add to Cart</button>
    </li>
  )
}

export default Item