import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assest/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
