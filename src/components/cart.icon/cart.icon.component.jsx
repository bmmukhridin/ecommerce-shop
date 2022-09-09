import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assest/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
