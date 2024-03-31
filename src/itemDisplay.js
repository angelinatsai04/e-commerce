import { React, useEffect, useState } from "react";
import BuyButton from "./buyButton.js";

function ItemDisplay({product, cart, setCart}) {


    return (
        <div>
            <p>
              {product.title}
              {product.price}
            </p>
            <BuyButton item={product.title} quantity={cart} setQuantity={setCart} />
        </div>
    );
}

export default ItemDisplay;