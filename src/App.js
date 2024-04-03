import { React, useEffect, useState } from "react";
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemDisplay from "./itemDisplay.js";
import Button from '@mui/material/Button';

function Main() {
  const [curState, setCurState] = useState();
  const [cartQuantity, setCartQuantity] = useState(0);
  const [search, setSearch] = useState('')
  const [cartToggle, setCartToggle] = useState(false); 
  const [cartItems, setCartItems] = useState();
  // const [products, setProducts] = useState([]);
  console.log("hi");

  async function PopulateData() {
      const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
      const data = await response.json();
      setCurState(data);
  }

   async function ViewCart() {
    const response = await fetch('https://dummyjson.com/carts/user/1');
    const cart = await response.json();
    setCartItems(cart);
    setCartToggle(true);
    console.log("here");
    console.log(cartItems);
    // return(
    //   <></>
    //   // cartItems.cart.products.map((productInCart)=> <ItemDisplay product={productInCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />) 
    // );
  }

  useEffect(() => {
    PopulateData();
  }, [search, cartToggle]);
  
  // console.log(curState.products[0]);
  console.log(`https://dummyjson.com/products/search?q=${search}`);
  console.log({search});
  console.log("bye");

  return (
    <div>
      <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginTop: "10px", width: "200px"}}/>
      <Badge badgeContent={cartQuantity} color="primary" onClick={ViewCart} style={{ marginLeft: "90%"}}>
        {!cartToggle ? "Click on Cart" : cartQuantity}
        <ShoppingCartIcon color="action" />
      </Badge>
      {cartToggle && (
        <div>
          {/* {cartItems && cartItems.products.map((productInCart) => (
            <ItemDisplay key={productInCart.id} product={productInCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
          ))} */}
          <Button onClick={() => setCartToggle(false)}>Close Cart</Button>
        </div>
      )}
      {!cartToggle && (
        <div>
          {!curState 
          ? <p> loading </p>
          : curState.products.map((product) => (
            <ItemDisplay key={product.id} product={product} setCartItems={setCartItems} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
          ))}
        </div>
      )}
    </div>
    // <div>
    //   <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginTop: "10px", width: "200px"}}/>
    //   <Badge badgeContent={cartQuantity} color="primary" onClick={ViewCart} style={{ marginLeft: "90%"}}>
    //     {!cartToggle
    //     ? "Click on Cart"
    //     : cartQuantity}
    //     <ShoppingCartIcon color="action" />
    //     {/* if quantity != 0 display in cart */}
    //   </Badge>
    //   <div>
    //     {!curState 
    //     ? <p> loading </p>
    //     : curState.products.map((product) => <ItemDisplay product={product} setCartItems={setCartItems} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />)
    //     }
    //   </div>
      
    // </div>
  );
}

export default Main;
