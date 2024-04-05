import { React, useEffect, useState } from "react";
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemDisplay from "./itemDisplay.js";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import CartDisplay from "./cartDisplay.js";

function Main() {
  const [curState, setCurState] = useState();
  const [cartQuantity, setCartQuantity] = useState(0);
  const [search, setSearch] = useState('')
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // const [products, setProducts] = useState([]);

  async function PopulateData() {
      const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
      const data = await response.json();
      setCurState(data);
  }

  //  async function ViewCart() {
  //   const response = await fetch('https://dummyjson.com/carts/user/2');
  //   const cart = await response.json();
  //   setCartItems(cart);
  //   setCartToggle(true);
  //   console.log("here");
  //   console.log(cartItems.products[0].title);
  //   // return(
  //   //   <></>
  //   //   // cartItems.cart.products.map((productInCart)=> <ItemDisplay product={productInCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />) 
  //   // );
  // }

  const CartList = (
    <Box sx={{ width: 400 }}>
      {!cartItems 
          ? <p> </p>
          : cartItems.map((product) => (
            <CartDisplay key={product.id} product={product} />))}
      <Button onClick={() => setOpen(false)}>Close Cart</Button>
    </Box>
  );

  useEffect(() => {
    PopulateData();
  }, [search]);
  
  // console.log(curState.products[0]);

  return (
    <div>
      <div style={{marginLeft: "1%"}}>
      <TextField id="outlined-basic" label="Search products..." variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: "10px", width: "400px"}}/>
      </div>
      <Badge badgeContent={cartQuantity} color="primary" onClick={toggleDrawer(true)} style={{ marginLeft: "95%", marginTop: "-80px"}}>
        <ShoppingCartIcon color="action" fontSize="large" />
      </Badge>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {CartList}
      </Drawer>
        <div style={{marginLeft: "1%"}}>
          {!curState 
          ? <p> loading </p>
          : curState.products.map((product) => (
            <ItemDisplay key={product.id} product={product} cartItems={cartItems}  setCartItems={setCartItems} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
          ))}
        </div>
    </div>
  );
}

export default Main;
