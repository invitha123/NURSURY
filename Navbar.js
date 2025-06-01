import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillShopping, AiFillHeart } from "react-icons/ai";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // Use the custom hook

const NavigationBar = () => {
  const navigate = useNavigate();
  const { cart } = useCart(); // Get cart items from context
  const cartCount = cart.length; // Get the number of items in the cart

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#4CAF50" }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
          <img src="/static/pp.png" alt="Plant Logo" width="40" height="40" className="me-2" />
          Bloom & Grow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="text-white">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Button variant="link" className="text-white me-3" onClick={() => navigate('/wishlist')}>
              <AiFillHeart size={24} />
            </Button>
            <Button variant="link" className="text-white position-relative" onClick={() => navigate('/cart')}>
              <AiFillShopping size={24} />
              {cartCount > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "0.7rem", minWidth: "18px" }}
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
