import React from "react";
import "./Hero1.css"; // ✅ import the CSS file

export default function Hero1() {
  return (
    <section className="hero-section d-flex  align-items-center justify-content-center text-center">
      <div className="hero-content">
        <h1>Wrap Your Baby with Love</h1>
        <p>Made with care, crafted for your little one...</p>
      </div>
      <div className="content2 mt-3">
      <p >Every product brings comfort, safety, and hugs your <br/>little one with warmth.</p>
      <a href="/products" className="pastel-btn mt-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
  Shop Now
</a>

      </div>
     
    </section>
    
  );
}