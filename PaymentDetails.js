import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart to clear cart
import "../styles/styles.css";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart(); // <-- Add this to clear cart after confirming

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (address && paymentMethod) {
      clearCart(); // <-- Clear cart here
      navigate("/OrderConfirmation"); // Then navigate to Order Confirmation page
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">🧾 Payment & Address Details</h2>
      <form onSubmit={handleConfirmOrder} className="payment-form">
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter your full address"
            className="payment-input"
          />
        </label>

        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="payment-input"
          >
            <option value="">Select Payment Method</option>
            <option value="COD">Cash on Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </label>

        <button type="submit" className="confirm-order-btn">
          Confirm Order ✅
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
