import React from 'react';
import "./Hero2.css";


export default function Hero2() {
    return (
      <section className="hero2-section text-center py-5">
        <div className="container">
          <h2 className="hero2-title">Essentials & Care</h2>
          <p className="hero2-subtitle">Thoughtfully chosen for every stage of love 💖</p>
  
          <div className="row justify-content-center mt-4">
            {/* Category 1 */}
            <div className="col-6 col-md-3 mb-4">
              <div className="category-card">
                <img src="src/assets/happy baby hd image.jpg" alt="Infants" className="category-img" />
                <p className="category-text">For Infants</p>
              </div>
            </div>
  
            {/* Category 2 */}
            <div className="col-6 col-md-3 mb-4">
              <div className="category-card">
                <img src="src/assets/toddler.png" alt="Toddlers" className="category-img" />
                <p className="category-text">For Toddlers</p>
              </div>
            </div>
  
            {/* Category 3 */}
            <div className="col-6 col-md-3 mb-4">
              <div className="category-card">
                <img src="src/assets/kids.png" alt="Kids" className="category-img" />
                <p className="category-text">For Kids</p>
              </div>
            </div>
  
            {/* Category 4 */}
            <div className="col-6 col-md-3 mb-4">
              <div className="category-card">
                <img src="src/assets/maternity.png" alt="Mothers" className="category-img" />
                <p className="category-text">Maternity Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }