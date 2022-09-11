import React from "react";
import "./cart-item.styles.scss";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>{quantity} x ${price}</span>
      </div>
      <span>{quantity}</span>
    </div>
  );
}

export default CartItem;
