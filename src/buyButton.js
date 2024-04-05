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
      // setCartItems([...cartItems, item]);
      // console.log(cartItems);
      // const response = await fetch('https://dummyjson.com/carts/3', {
      //   method: 'PUT',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       merge: true,
      //       products: [
      //         {
      //           id: `${item.id}`,
      //           quantity: `${quantity + 1}`,
      //         },
      //       ]
      //   })
      // });
      // const data = await response.json();
      // setCartItems(data);
      // console.log("add");
      // console.log(data.products);
    }

    async function handleRemove() {
      if (quantity > 0){ 
        setQuantity(quantity - 1);
        setCartQuantity(cartQuantity - 1);
        // const data = await fetch('https://dummyjson.com/carts/3', {
        //   method: 'PATCH',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     merge: true,
        //     products: [
        //       {
        //         id: `${item.id}`,
        //         quantity: `${quantity - 1}`,
        //       },
        //     ]
        //   })
        // })
        // setCartItems(data);
        // console.log("remove");
        // console.log(data.products);

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