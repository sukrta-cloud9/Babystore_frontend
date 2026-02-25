import React from "react";
import "./Hero1.css"; 
import { Link } from "react-router-dom";

export default function Hero1() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <h1>Wrap Your Baby with Love</h1>
        <p>Made with care, crafted for your little one...</p>
      
      
      <p className="tagline">
        Every product brings comfort, safety, and hugs your <br/>little one with warmth.
      </p>
      
<Link to="/products" className="pastel-btn">Shop Now</Link>

      </div>
     
    </section>
    
  );
}