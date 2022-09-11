import "./product-card.styles.scss";
import { CartContext } from "../../context/cart.context";
import React, { useContext } from "react";
import Button from "../Button-component/Button";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = ()=> addItemToCart(product)
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </div>
  );
}

export default ProductCard;
