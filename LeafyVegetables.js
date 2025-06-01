import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/styles.css";

const LeafyVegetables = () => {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [searchTerm, setSearchTerm] = useState("");

  const leafyVegetables = [
    { img: "/static/spi.jpg", title: "Spinach Plant", price: "₹150" },
    { img: "/static/cabbage.jfif", title: "Cabbage Plant", price: "₹200" },
    { img: "/static/kale.jpg", title: "Kale Plant", price: "₹250" },
    { img: "/static/fenugreek.jfif", title: "Fenugreek Plant", price: "₹180" },
    { img: "/static/let.jfif", title: "Lettuce Plant", price: "₹220" },
    { img: "/static/mustard.jfif", title: "Mustard Plant", price: "₹170" },
    { img: "/static/cori.jfif", title: "Coriander Plant", price: "₹120" },
    { img: "/static/pala.jfif", title: "Palak (Spinach) Plant", price: "₹160" },
  ];

  const isInCart = (item) => cart.some((cartItem) => cartItem.title === item.title);
  const isWishlisted = (item) => wishlist.some((wishItem) => wishItem.title === item.title);

  const filteredPlants = leafyVegetables.filter((plant) =>
    plant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success my-4">
        🌱 Leafy Vegetables - Explore & Buy 🍃
      </h2>

      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search plants..."
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

export default LeafyVegetables;
