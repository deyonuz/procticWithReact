import React from "react";
import "./card.css";

const Card = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Narxi: ${product.price}</p>
    </div>
  );
};

export default Card;
