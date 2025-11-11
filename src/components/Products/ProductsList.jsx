import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

const ProductsList = () => {
  const products = [
    { id: 1, name: "Soft Cotton Infant Dress", price: "₹599", img: "src/assets/infantfrock.png", category: "Infants", rating: 4.5, offer: "10% OFF" },
    { id: 2, name: "Feeding Bottle Set", price: "₹399", img: "src/assets/feedingbottle.png", category: "Infants", rating: 4 },
    { id: 3, name: "Baby oils and lotions", price: "₹490", img: "src/assets/babyoil.png", category: "Infants", rating: 4 },
    { id: 4, name: "Wrappers and Towels", price: "₹699", img: "src/assets/towel.png", category: "Infants", rating: 4.5},
    { id: 5, name: "Soft Toys", price: "₹799", img: "src/assets/softtoys.png", category: "Toddlers", rating: 4 },
    { id: 6, name: "Tiny Car", price: "₹1050", img: "src/assets/toddlerrider.png", category: "Toddlers", rating: 4 },
    { id: 7, name: "Play Books", price: "₹300", img: "src/assets/toddlerbook.png", category: "Toddlers", rating: 4 },
    { id: 8, name: "Tees & Frocks", price: "₹599", img: "src/assets/toddlercloth.png", category: "Toddlers", rating: 4 },
    { id: 9, name: "Shoes", price: "₹699", img: "src/assets/kidsshoes.png", category: "Kids", rating: 3.5 },
    { id: 10, name: "Study Table", price: "₹1550", img: "src/assets/studytable.png", category: "Kids", rating: 4.5 },
    { id: 11, name: "Wooden Alphabet Board", price: "₹999", img: "src/assets/alphabetboard.png", category: "Kids", rating: 4 },
    { id: 12, name: "Coloring Books and Crayons", price: "₹350", img: "src/assets/crayonbook.png", category: "Kids", rating: 4 },
    { id: 13, name: "Maternity Nightware", price: "₹899", img: "src/assets/Maternity Nightware.png", category: "Maternity", rating: 4, offer: "20% OFF" },
    { id: 14, name: "Maternity Pads", price: "₹299", img: "src/assets/Maternity Pads.png", category: "Maternity", rating: 4, offer: "20% OFF" },
    { id: 15, name: "Protein Powder", price: "₹2100", img: "src/assets/Protein Powder.png", category: "Maternity", rating: 4, offer: "20% OFF" },
    { id: 16, name: "Vitamins & Minerals Suppliment Tablets", price: "₹900", img: "src/assets/Vitamins & Minerals.png", category: "Maternity", rating: 4, offer: "20% OFF" },


  ];
   


  const categories = ["Infants", "Toddlers", "Kids", "Maternity"];

  return (
    <div className="products-page container py-5">
      {categories.map((category) => (
        <div key={category} className="category-section mb-5">
          <h2 className="category-title text-center mb-4 pastel-heading">
            {category} 
          </h2> 
          <div className="row">
            {products
              .filter((item) => item.category === category)
              .map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                  <ProductCard {...product} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;