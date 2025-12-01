import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products"; 
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin"; 
import Register from "./pages/Register";  
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />  {/* <-- Added this */}
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
