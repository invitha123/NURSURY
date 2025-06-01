import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import "../styles/styles.css";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/home"); // Redirect to home page
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In Successful!");
      navigate("/home"); // Redirect to home page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <button onClick={handleGoogleSignIn} className="google-btn">
          <FcGoogle className="google-icon" /> Continue with Google
        </button>
        <p className="auth-toggle">
          Don't have an account? <a href="/Signup" className="auth-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
