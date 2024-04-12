import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from "./pages/Home.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Layout from "./components/Layout.jsx";
import Cart from "./pages/Cart.jsx";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <Routes>
          <Route element={<Layout cart={cart} />}>
            <Route index element={<Home/>} />
            <Route path="/a-propos" element={<About />}/>
            <Route path="/plat/:slug" element={<DishDetails addToCart={addToCart} />}/>
            <Route path="/panier" element={<Cart cart={cart} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
