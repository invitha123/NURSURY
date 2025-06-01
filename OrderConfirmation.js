import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-container">
      <h2 className="order-confirmation-title">🎉 Order Confirmed!</h2>
      <p className="order-confirmation-message">
        Thank you for shopping with us. Your plants are on their way! 🌱
      </p>
      <Link to="/home" className="continue-shopping-btn">
        Continue Shopping 🛒
      </Link>
    </div>
  );
};

export default OrderConfirmation;
