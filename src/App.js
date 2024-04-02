import { React, useEffect, useState } from "react";
import "./App.css";
import ItemDisplay from "./itemDisplay.js";

function Main() {
  const [curState, setCurState] = useState();
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState('')
  const [cartToggle, setCartToggle] = useState(false); 
  // const [products, setProducts] = useState([]);
  console.log("hi");

  async function PopulateData() {
      const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
      const data = await response.json();
      setCurState(data);
  }

  useEffect(() => {
    PopulateData();
  }, [search]);

  
  // console.log(curState.products[0]);
  console.log(`https://dummyjson.com/products/search?q=${search}`);
  console.log({search});
  console.log("bye");

  return (
    <div>
      <button onClick={() => setCartToggle(!cartToggle)}>
        {!cartToggle
        ? "Click on Cart"
        : cart}
        {/* if quantity != displaay in cart */}
      </button>
      <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <div>
        {!curState 
        ? <p> loading </p>
        : curState.products.map((product) => <ItemDisplay product={product} cart={cart} setCart={setCart} />)
        }
      </div>
      
    </div>
  );
}

export default Main;
