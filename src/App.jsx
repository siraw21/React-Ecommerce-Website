import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
