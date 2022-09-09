import "./product-card.styles.scss";
import React from "react";
import Button from "../Button-component/Button";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">ADD TO CART</Button>
    </div>
  );
}

export default ProductCard;
