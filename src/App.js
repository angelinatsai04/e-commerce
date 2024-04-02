import { React, useEffect, useState } from "react";
import "./App.css";
import ItemDisplay from "./itemDisplay.js";

function Main() {
  const [curState, setCurState] = useState();
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState('')
  // const [products, setProducts] = useState([]);
  console.log("hi");

  async function PopulateData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setCurState(data);
  }
  
  useEffect(() => {
    PopulateData();
  }, []);

  
  // console.log(curState.products[0]);
  console.log("bye");

  return (
    <div>
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
