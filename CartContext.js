import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const CartContext = createContext();

// Custom hook for using CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage on initial render
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart Function
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove from Cart Function
  const removeFromCart = (itemTitle) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== itemTitle));
  };

  // Clear Cart Function
  const clearCart = () => {
    setCart([]); // Clears the cart
    localStorage.removeItem("cart"); // Optional: Also remove from localStorage immediately
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
