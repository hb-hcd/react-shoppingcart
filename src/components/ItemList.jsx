import React from 'react'
import Item from './Item'

const ItemList = ({index,items,addNewItem}) => {
    return (
        <main location="[object Object]" computedmatch="[object Object]">
            <ul className="items">
                {items.map(item => <Item key={item.id} item={item} addNewItem={addNewItem} />)}
            </ul>
        </main>
    )
}

export default ItemList