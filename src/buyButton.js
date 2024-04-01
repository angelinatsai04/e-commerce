import { React, useState } from "react";
function BuyButton({item, cartQuantity, setCartQuantity}) {
    const [quantity, setQuantity] = useState(0);
  
    function handleAdd() {
      setQuantity(quantity + 1);
      setCartQuantity(cartQuantity + 1);
    }

    function handleRemove() {
      if (quantity > 0){ 
        setQuantity(quantity - 1);
      } else {
        setQuantity(0);
      }
      if (cartQuantity > 0){ 
        setCartQuantity(cartQuantity - 1);
      } else {
        setCartQuantity(0);
      }
      
    }
  
    return (
      <>
        <button onClick={handleAdd}>
          +
        </button>
        Quanity: {quantity}
        <button onClick={handleRemove}>
          -
        </button>
        <p>
          Cart: {cartQuantity}
        </p>
      </>
    );
}

export default BuyButton;