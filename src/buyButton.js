import { React, useState } from "react";
import Button from '@mui/material/Button';

function BuyButton({item, setCartItems, cartQuantity, setCartQuantity}) {
    const [quantity, setQuantity] = useState(0);
  
    async function handleAdd() {
      setQuantity(quantity + 1);
      setCartQuantity(cartQuantity + 1);
      const response = await fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: `${item.id}`,
              quantity: `${quantity + 1}`,
            },
          ]
        })
      });
      const data = await response.json();
      setCartItems(data);
    }

    function handleRemove() {
      if (quantity > 0){ 
        setQuantity(quantity - 1);
        setCartQuantity(cartQuantity - 1);
        setCartItems(fetch('https://dummyjson.com/carts/1', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            merge: true,
            products: [
              {
                id: `${item.id}`,
                quantity: `${quantity - 1}`,
              },
            ]
          })
        }).then(res => res.json())).then(console.log)
      } else {
        setQuantity(0);
        setCartQuantity(cartQuantity);
      }
    }
  
    return (
      <>
        <Button variant="outlined" onClick={handleAdd}>
          +
        </Button>
        Quanity: {quantity}
        <Button variant="outlined" onClick={handleRemove}>
          -
        </Button>
        <p>
          Items in Cart: {cartQuantity}
        </p>
      </>
    );
}

export default BuyButton;