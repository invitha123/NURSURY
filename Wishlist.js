import React, { useEffect } from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    console.log("Wishlist Items:", wishlist); // Debugging
  }, [wishlist]);

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">❤️ Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="wishlist-empty">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img
                src={item.img}
                alt={item.title}
                className="wishlist-item-img"
                onError={(e) => {
                  e.target.src = "/static/placeholder.jpg"; // Fallback image
                }}
              />
              <div className="wishlist-item-details">
                <h5>{item.title}</h5>
                <p className="wishlist-item-price">
                  Price: <strong>{item.price}</strong>
                </p>
              </div>
              <button
                className="wishlist-remove-btn"
                onClick={() => removeFromWishlist(item)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="wishlist-actions">
        <Link to="/fruitplants" className="wishlist-continue-btn">
          Continue Shopping 🛍️
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
