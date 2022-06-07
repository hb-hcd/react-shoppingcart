
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import CartSummary from './components/CartSummary';

function App() {



  /*
  
const searchMovies = async (query) =>{
    const request  =await fetch(`${SEARCH_URL}&query=${query}`);
    const res = await request.json();
    const movies = await res.results;
    //console.log(movies);
    return movies;
}

  */
  const [items, setItems] = useState([]);

  const [cartItems, setCartItems] = useState([])

  const [showCart, setShowCart] = useState(false)

  const [totalValue, setTotalValue] = useState(0)



  const loadItems = async () => {
    const resquest = await fetch('https://5ed0108416017c00165e327c.mockapi.io/api/v1/items');
    const data = await resquest.json();
    //await data.results
    //console.log("first time",data);
    return data;
  }

  useEffect(() => {
    loadItems().then(res => setItems(res));
    //loadItems().then(res=>setCartItems(res));
    //console.log("second time",items);
  }, [])

  useEffect(() => {
    setTotalValue(cartItems.reduce((total, item) => total += item.price, 0))
  })



  const ToggleCart = () => {
    setShowCart((prevState) => !prevState);
  }

  const AddNewItem = (itemToAdd) => {  
   // console.log(itemToAdd);
    // setCartItems((prevState) => {
    //   const index = cartItems.findIndex(item => item.id === itemToAdd.id);
    //   if (index === -1) {
    //     return [...prevState, { ...itemToAdd, quantity: 1 }]
    //   }
    //   const newCart = [...prevState];
    //   newCart[index] = { ...newCart[index], quantity: newCart[index].quantity++ }
    //   console.log(newCart);
    //   return newCart;
    // })
    // const selectedItem = items.find(item => item.id == id);
    // setCartItems([selectedItem, ...cartItems]);
    //console.log(cartItems);
    setCartItems((prevState) => {
      const findIndex = cartItems.findIndex((item) => item.id === itemToAdd.id);
      //console.log(findIndex);
      console.log("prevstate"+[...prevState]);
      if (findIndex === -1) {
        return [...prevState, { ...itemToAdd, quantity: 1 }];
      }
      const newCart = [...prevState];
      newCart[findIndex] = {
        ...newCart[findIndex],
        quantity: newCart[findIndex].quantity ++,
      };
    //  console.log("newcart"+newCart);
      return newCart;
    });
  }
    return (
    <>
      <Header >
        <CartSummary handleClick={ToggleCart} items={cartItems} total={totalValue} />
        {showCart && <Cart items={cartItems} />}
      </Header>
      <ItemList items={items} addNewItem={AddNewItem} />
    </>
  );
}

export default App;
