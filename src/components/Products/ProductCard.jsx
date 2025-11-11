import React from "react";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Products.css";

const ProductCard = ({ name, price, img, rating, offer }) => {
  return (
    <div className="product-card">
      {offer && <span className="offer-badge">{offer}</span>}
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <p className="price">{price}</p>

      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < Math.round(rating) ? "#FFD700" : "#E0E0E0"} />
        ))}
      </div>

      <div className="actions">
        <button className="like-btn"><FaHeart /></button>
        <button className="cart-btn"><FaShoppingCart /> Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;