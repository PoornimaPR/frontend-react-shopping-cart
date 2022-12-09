import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { createContext, useState } from "react";

export const CartContext = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const value = { cartProducts, setCartProducts };
  return (
    <BrowserRouter>
      <CartContext.Provider value={value}>
        <Routes>
          <Route path="" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartContext.Provider>
      <ToastContainer floatingTime={3000} />
    </BrowserRouter>
  );
}

export default App;
