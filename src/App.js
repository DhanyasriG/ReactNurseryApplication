import './App.css';
import { useEffect, useState } from 'react';
import Cart from './Cart';
import Home from './Home';
import Display from './Display';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [cart, setCart] = useState(() => {
    // Retrieve cart from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleChange=(item,d)=>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id===item.id)
        ind=index;
    })
    const z=cart;
    z[ind].amount+=d;
    if(z[ind].amount===0)
      z[ind].amount=1;
    setCart([...z])
  }

  return (
    <div className="App">
      <Router basename="/ReactNurseryApplication">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/plants" element={<Display cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
