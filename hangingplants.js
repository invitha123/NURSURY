import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/styles.css";

const HangingPlants = () => {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [searchTerm, setSearchTerm] = useState("");

  const hangingPlants = [
    { img: "/static/pothos.webp", title: "Pothos (Money Plant)", price: "₹180" },
    { img: "/static/spider.jfif", title: "Spider Plant", price: "₹220" },
    { img: "/static/string.jfif", title: "String of Pearls", price: "₹260" },
    { img: "/static/burros.jfif", title: "Burro's Tail", price: "₹240" },
    { img: "/static/fern.webp", title: "Hanging Fern", price: "₹200" },
    { img: "/static/hoya.jfif", title: "Hoya Plant", price: "₹270" },
    { img: "/static/dischida.jfif", title: "Dischidia Plant", price: "₹230" },
    { img: "/static/lipstick.jpg", title: "Lipstick Plant", price: "₹250" },
  ];

  const isInCart = (item) => cart.some((cartItem) => cartItem.title === item.title);
  const isWishlisted = (item) => wishlist.some((wishItem) => wishItem.title === item.title);

  const filteredPlants = hangingPlants.filter((plant) =>
    plant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success my-4">
        🌿 Hanging Plants - Beautify Your Space ✨
      </h2>

      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search hanging plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-50"
        />
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm border-success h-100 d-flex flex-column">
                <Button
                  variant="light"
                  className="wishlist-btn"
                  onClick={() =>
                    isWishlisted(plant) ? removeFromWishlist(plant) : addToWishlist(plant)
                  }
                >
                  {isWishlisted(plant) ? "❤️" : "🤍"}
                </Button>

                <img
                  src={plant.img}
                  className="card-img-top img-fluid"
                  alt={plant.title}
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = "/static/placeholder.jpg";
                    console.log(`Image not found: ${plant.img}`);
                  }}
                />

                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title text-success">{plant.title}</h5>
                  <p className="text-muted fw-bold">Price: {plant.price}</p>

                  <Button
                    variant={isInCart(plant) ? "secondary" : "success"}
                    onClick={() => addToCart(plant)}
                    disabled={isInCart(plant)}
                    className="mt-auto"
                  >
                    {isInCart(plant) ? "Added to Cart" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger fw-bold">No matching plants found.</p>
        )}
      </div>
    </div>
  );
};

export default HangingPlants;
