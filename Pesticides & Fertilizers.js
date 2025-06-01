import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/styles.css";

const PesticidesAndFertilizers = () => {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [searchTerm, setSearchTerm] = useState("");

  const pesticidesAndFertilizers = [
    { img: "/static/organic.jfif", title: "Organic Pesticide", price: "₹300" },
    { img: "/static/agro.jfif", title: "Chemical Pesticide", price: "₹250" },
    { img: "/static/organic.jfif", title: "Organic Fertilizer", price: "₹200" },
    { img: "/static/npk.jfif", title: "NPK Fertilizer", price: "₹350" },
    { img: "/static/inspecticide.jfif", title: "Insecticide Spray", price: "₹180" },
    { img: "/static/compost.jfif", title: "Compost Fertilizer", price: "₹220" },
    { img: "/static/fungicide.jpg", title: "Fungicide", price: "₹270" },
    { img: "/static/liquid.webp", title: "Liquid Fertilizer", price: "₹250" },
  ];

  const isInCart = (item) => cart.some((cartItem) => cartItem.title === item.title);
  const isWishlisted = (item) => wishlist.some((wishItem) => wishItem.title === item.title);

  const filteredProducts = pesticidesAndFertilizers.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success my-4">
        🌿 Pesticides & Fertilizers - For Healthy Plants 🌱
      </h2>

      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search pesticides & fertilizers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-50"
        />
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm border-success h-100 d-flex flex-column">
                <Button
                  variant="light"
                  className="wishlist-btn"
                  onClick={() =>
                    isWishlisted(product) ? removeFromWishlist(product) : addToWishlist(product)
                  }
                >
                  {isWishlisted(product) ? "❤️" : "🤍"}
                </Button>

                <img
                  src={product.img}
                  className="card-img-top img-fluid"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = "/static/placeholder.jpg";
                    console.log(`Image not found: ${product.img}`);
                  }}
                />

                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title text-success">{product.title}</h5>
                  <p className="text-muted fw-bold">Price: {product.price}</p>

                  <Button
                    variant={isInCart(product) ? "secondary" : "success"}
                    onClick={() => addToCart(product)}
                    disabled={isInCart(product)}
                    className="mt-auto"
                  >
                    {isInCart(product) ? "Added to Cart" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger fw-bold">No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default PesticidesAndFertilizers;
