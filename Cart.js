import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Remove clearCart from here
  const navigate = useNavigate();

  const handleProceedToBuy = () => {
    navigate("/PaymentDetails"); // Just navigate to PaymentDetails page
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.img}
                alt={item.title}
                className="cart-item-img"
                onError={(e) => {
                  e.target.src = "/static/placeholder.jpg";
                }}
              />
              <div className="cart-item-details">
                <h5>{item.title}</h5>
                <p className="cart-item-price">
                  Price: <strong>{item.price}</strong>
                </p>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item.title)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-actions">
          <button className="cart-proceed-btn" onClick={handleProceedToBuy}>
            🛍️ Proceed to Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
