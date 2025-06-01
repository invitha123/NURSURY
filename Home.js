import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AiOutlineSearch } from "react-icons/ai";
import { Form, FormControl, Button, Carousel } from "react-bootstrap";
import "../styles/styles.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search for:", searchTerm);
  };

  const carouselImages1 = ["1.jpg", "2.jpg", "3.jpg"];
  const carouselImages2 = ["4.webp", "5.avif", "6.jpg"];

  const plants = [
    { img: "/static/fruit.avif", title: "Fruit Plants", link: "/FruitPlants" },
    { img: "/static/rose.webp", title: "Flowering Plants", link: "/Floweringplants" },
    { img: "/static/leaf.webp", title: "Leafy Vegetables", link: "/LeafyVegetables" },
    { img: "/static/oxygen.webp", title: "Air Purifying Plants", link: "/AirPurifyingPlants" },
    { img: "/static/indoor.jfif", title: "Indoor Plants", link: "/indoorplants" },
    { img: "/static/outdoor.jpg", title: "Outdoor Plants", link: "/outdoorplants" },
    { img: "/static/hang.jpg", title: "Hanging Plants", link: "/hangingplants" },
    { img: "/static/pot.avif", title: "Gardening Pots", link: "/gardeningplants" },
    { img: "/static/pest.webp", title: "Pesticides & Fertilizers", link: "/Pesticides & Fertilizers" },
  ];

  // Filter categories based on search input
  const filteredPlants = plants.filter((plant) =>
    plant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container welcome-section">
      <Navbar />
      <h1 className="text-center">Welcome to Bloom & Grow</h1>
      <p className="text-center">Discover a variety of plants and accessories.</p>

      {/* Search Bar */}
      <Form className="search-bar mt-4 d-flex justify-content-center" onSubmit={handleSearch}>
        <FormControl
          type="text"
          placeholder="Search for categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
          style={{ width: "70%" }}
        />
        <Button type="submit" variant="success" className="ms-3" style={{ height: "38px", width: "38px", padding: 0 }}>
          <AiOutlineSearch size={20} />
        </Button>
      </Form>

      {/* Carousel Section */}
      <div className="row mt-4">
        <div className="col-md-6 col-12">
          <Carousel controls={false} interval={3000} className="custom-carousel">
            {carouselImages1.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img src={`/static/${img}`} className="d-block w-100" alt="Plant Showcase 1" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-6 col-12">
          <Carousel controls={false} interval={3000} className="custom-carousel">
            {carouselImages2.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img src={`/static/${img}`} className="d-block w-100" alt="Plant Showcase 2" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Display Filtered Categories */}
      <div className="mt-5" style={{ overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "10px" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, index) => (
              <div key={index} className="plant-card">
                <div className="card" style={{ width: "250px", height: "320px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <img
                    src={plant.img}
                    className="card-img-top"
                    alt={plant.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center p-2">
                    <h6 className="card-title m-0">{plant.title}</h6>
                    <Button variant="success" className="w-100 mt-2" onClick={() => navigate(plant.link)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No categories found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
