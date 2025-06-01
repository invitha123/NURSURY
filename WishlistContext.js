import React, { createContext, useContext, useEffect, useState } from "react";

// Create Wishlist Context
const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage when the component mounts
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to Wishlist
  const addToWishlist = (item) => {
    if (!wishlist.some((wishlistItem) => wishlistItem.title === item.title)) {
      const updatedWishlist = [...wishlist, item];
      setWishlist(updatedWishlist);
    }
  };

  // Remove from Wishlist
  const removeFromWishlist = (title) => {
    const updatedWishlist = wishlist.filter((item) => item.title !== title);
    setWishlist(updatedWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
