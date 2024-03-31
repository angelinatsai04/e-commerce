import { React, useState } from "react";
function BuyButton({item, quantity, setQuantity}) {
  
    function handleAdd() {
      setQuantity(quantity + 1);
    }

    function handleRemove() {
      if (quantity > 0){ 
        setQuantity(quantity - 1);
      } else {
        setQuantity(0);
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
        </>
      
    );
}

export default BuyButton;