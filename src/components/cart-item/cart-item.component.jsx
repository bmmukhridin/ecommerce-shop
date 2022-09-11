import React from "react";
import "./cart-item.styles.scss";

function CartItem({ cartItem }) {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default CartItem;
