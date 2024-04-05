import { React, useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BuyButton({item, cartItems, setCartItems, cartQuantity, setCartQuantity}) {
  
  const [quantity, setQuantity] = useState(0);
  
  async function handleAdd() {
      setQuantity(quantity + 1);
      setCartQuantity(cartQuantity + 1);
      console.log(cartItems);
      const updatedCartItems = cartItems ? cartItems : [];
      setCartItems([...updatedCartItems, item]);
      console.log(updatedCartItems);
    }

    async function handleRemove() {
      if (quantity > 0){ 
        setQuantity(quantity - 1);
        setCartQuantity(cartQuantity - 1);
        const index = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (index !== -1) {
          const newCartItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
          setCartItems(newCartItems);
        }
      } else {
        setQuantity(quantity);
        setCartQuantity(cartQuantity);
      }
    }
  
    return (
      <>
        <IconButton variant="outlined" onClick={handleAdd}>
          <AddIcon/>
        </IconButton>
        Quantity: {quantity}
        <IconButton variant="outlined" onClick={handleRemove}>
          <RemoveIcon/>
        </IconButton>
      </>
    );
}

export default BuyButton;