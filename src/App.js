// import { Input, Button, Card, message } from "antd"; // Assuming you're using Ant Design
// import 'antd/dist/reset.css';
// import "./App.css";

// const { Meta } = Card;

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Add item to cart
//   const addToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);
//     message.success("Item added to cart!");
//   };

//   // Remove item from cart
//   const removeFromCart = (productId) => {
//     const newCart = cart.filter((item) => item.id !== productId);
//     setCart(newCart);
//     message.success("Item removed from cart!");
//   };

//   // Search products by name or category
//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="App">
//       <h1>E-commerce Platform</h1>
//       <Input
//         placeholder="Search products..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         style={{ marginBottom: "20px", width: "300px" }}
//       />
//       <div className="product-list">
//         {filteredProducts.map((product) => (
//           <Card
//             key={product.id}
//             hoverable
//             style={{ width: 240, margin: "10px" }}
//             cover={<img alt={product.name} src={product.image} />}
//           >
//             <Meta title={product.name} description={`$${product.price}`} />
//             <Button onClick={() => addToCart(product)}>Add to Cart</Button>
//           </Card>
//         ))}
//       </div>
//       <h2>Shopping Cart</h2>
//       <div className="cart">
//         {cart.map((item) => (
//           <div key={item.id} className="cart-item">
//             <span>{item.name}</span>
//             <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { React, useEffect, useState } from "react";
import "./App.css";
import BuyButton from "./buyButton.js";
import ItemDisplay from "./itemDisplay.js";

function Main() {
  const [curState, setCurState] = useState();
  const [cart, setCart] = useState();
  // const [products, setProducts] = useState([]);
  console.log("hi");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("//dummyjson.com/test");
  //       const data = await response.json();
  //       setCurState(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  async function PopulateData() {
    // fetch('https://dummyjson.com/products').then((response) => response.json()).then((data) => {
    //         if (Array.isArray(data)) {
    //           setProducts(data);
    //         } else {
    //           console.error("Products data is not an array:", data);
    //         }
    //       })
    //       .catch((error) => console.error("Error fetching products:", error));
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
