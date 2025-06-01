import React, { useState } from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import "../styles/styles.css";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        <form onSubmit={handleSignUp} className="auth-form">
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
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <button onClick={handleGoogleSignIn} className="google-btn">
          <FcGoogle className="google-icon" /> Continue with Google
        </button>
        <p className="auth-toggle">
          Already have an account? <Link to="/" className="auth-link">Login</Link> {/* ✅ Fixed Link */}
        </p>
      </div>
    </div>
  );
}
