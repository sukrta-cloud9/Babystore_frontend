import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        height: "80px",
        background: "linear-gradient(to right, #FEC8D8, #C6E2E9)",
      }}
    >
      <div className="container-fluid">
        {/* Brand Name */}
        {/*
        <Link className="navbar-brand fw-bold" to="/" style={{ color: "#3B3B3B" }}>
          BabyBay
          
        </Link>*/}
        {/* Center Logo */}
        <Link
          to="/"
          className="position-absolute top-50 start-50 translate-middle"
          style={{ textDecoration: "none" }}
        >
          <img
            src="src/assets/Untitled design_20251106_144017_0000.svg"  // 👈 your logo path
            alt="BabyBay Logo"
            style={{ height: "500px", width:"400px", objectFit: "contain" }}
          />
          
        </Link>

        {/* Hamburger Menu for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/Home" >
            <i className="bi bi-house"title="Home"style={{ fontSize: "1.3rem", color: "rgb(244, 119, 119)" }}></i>
            </Link>
          </li>
            <li className="nav-item"> 
              <Link className="nav-link fw-semibold" to="/products">
              <i className="bi bi-bag "title="Products" style={{ fontSize: "1.3rem", color: "rgb(244, 119, 119)" }}></i> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/cart" >
              <i className="bi bi-cart" title="Cart" style={{ fontSize: "1.3rem", color: "rgb(244, 119, 119)" }}></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/wishlist">
              <i className="bi bi-heart-fill" title="Wishlist" style={{ fontSize: "1.3rem", color: "rgb(244, 119, 119)" }}></i>
              </Link>
            </li>
            {!user && (
  <li className="nav-item">
    <Link className="nav-link fw-semibold" to="/login">
      <i className="bi bi-person" title="Login" style={{ fontSize: "1.3rem", color:"rgb(244, 119, 119)" }}></i>
    </Link>
  </li>
)}
{/* ⭐ ADMIN LOGIN ICON (only if NOT logged in) */}
{!user && (
    <li className="nav-item">
      <Link className="nav-link fw-semibold" to="/admin-login">
        <i className="bi bi-shield-lock" title="Admin Login"
           style={{ fontSize: "1.3rem", color:"rgb(244, 119, 119)" }}></i>
      </Link>
    </li>
  )}

{/* ⭐ IF USER LOGGED IN → show Profile icon */}
{user && user.role === "user" && (
  <li className="nav-item">
    <Link className="nav-link fw-semibold" to="/profile">
      <i className="bi bi-person-circle" title="My Account" style={{ fontSize: "1.3rem", color:"rgb(244, 119, 119)" }}></i>
    </Link>
  </li>
)}

{/* ⭐ IF ADMIN LOGGED IN → show Admin Dashboard icon */}
{user && user.role === "admin" && (
  <li className="nav-item">
    <Link className="nav-link fw-semibold" to="/admin">
      <i className="bi bi-speedometer2" title="Admin Dashboard" style={{ fontSize: "1.3rem", color:"rgb(244, 119, 119)" }}></i>
    </Link>
  </li>
)}

{/* ⭐ LOGOUT ICON (for both admin + user) */}
{user && (
  <li className="nav-item">
    <button 
      className="nav-link fw-semibold bg-transparent border-0"
      onClick={logout}
      style={{ cursor: "pointer" }}
    >
      <i className="bi bi-box-arrow-right" title="Logout" style={{ fontSize: "1.3rem", color:"rgb(244, 119, 119)" }}></i>
    </button>
  </li>
)}
          </ul>
        </div>
      </div>
    </nav>
  );
}