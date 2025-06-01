import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "../styles/styles.css";

const GardeningPlants = () => {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [searchTerm, setSearchTerm] = useState("");

const gardeningPlants = [
  { img: "/static/tomo.jfif", title: "Tomato Pot", price: "₹120" },
  { img: "/static/chill.jfif", title: "Chilli Pot", price: "₹100" },
  { img: "/static/brinja.jfif", title: "Brinjal Pot", price: "₹130" },
  { img: "/static/lads.webp", title: "Lady Finger Pot", price: "₹110" },
  { img: "/static/bitter.jfif", title: "Bitter Gourd Pot", price: "₹140" },
  { img: "/static/cucum.jfif", title: "Cucumber Pot", price: "₹150" },
  { img: "/static/beans.webp", title: "Beans Pot", price: "₹115" },
  { img: "/static/carrot.jfif", title: "Carrot Pot", price: "₹125" },
];


  const isInCart = (item) => cart.some((cartItem) => cartItem.title === item.title);
  const isWishlisted = (item) => wishlist.some((wishItem) => wishItem.title === item.title);

  const filteredPlants = gardeningPlants.filter((plant) =>
    plant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success my-4">
        🌿 Gardening Plants - Grow Your Own Food 🌱
      </h2>

      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search gardening plants..."
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

export default GardeningPlants;
