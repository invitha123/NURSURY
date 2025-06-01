import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import FruitPlants from "./components/FruitPlants";
import FloweringPlants from "./components/FloweringPlants";
import LeafyVegetables from "./components/LeafyVegetables";
import AirPurifyingPlants from "./components/AirPurifyingPlants";
import IndoorPlants from "./components/indoorplants"; 
import OutdoorPlants from "./components/outdoorplants"; 
import HangingPlants from "./components/hangingplants"; 
import GardeningPots from "./components/gardeningplants"; 
import PesticidesFertilizers from "./components/Pesticides & Fertilizers"; 
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import PaymentDetails from "./components/PaymentDetails"; 
import OrderConfirmation from "./components/OrderConfirmation"; 
import Contact from "./components/Contact";  // Import Contact component
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/FruitPlants"
              element={<FruitPlants searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/FloweringPlants"
              element={<FloweringPlants searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/LeafyVegetables"
              element={<LeafyVegetables searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/AirPurifyingPlants"
              element={<AirPurifyingPlants searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/indoorplants"
              element={<IndoorPlants searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/outdoorplants"
              element={<OutdoorPlants searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/hangingplants"
              element={<HangingPlants searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/gardeningplants"
              element={<GardeningPots searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route
              path="/Pesticides & Fertilizers"
              element={<PesticidesFertilizers searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/PaymentDetails" element={<PaymentDetails />} />
            <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
            <Route path="/contact" element={<Contact />} /> {/* Added route for Contact */}
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
