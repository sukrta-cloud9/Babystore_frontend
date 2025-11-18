import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    // Simulate payment delay
    setTimeout(() => {
      clearCart();                // Empty the cart
      navigate("/payment-success"); // Redirect to success page
    }, 1500);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center pastel-heading mb-4">Checkout</h2>

      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <h5 className="mb-3">Order Summary</h5>

        <p style={{ fontSize: "1.1rem" }}>
          Total Amount:{" "}
          <span style={{ color: "#f27777", fontWeight: "700" }}>
            ₹{getTotal()}
          </span>
        </p>

        <button
          className="cart-btn w-100 mt-3"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}
