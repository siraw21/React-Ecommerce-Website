import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import CardProvider from "./context/CartProvider";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <AuthProvider>
      <CardProvider>
        <div className="app">
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            
          </Routes>
        </div>
      </CardProvider>
    </AuthProvider>
  );
}

export default App;
