import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

// import { CartContext } from "../../context/cart.context(draft)";
import { ReactComponent as ShoppingIcon } from "../../assest/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon() {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
const dispatch=useDispatch()

const cartCount = useSelector(selectCartCount)
const isCartOpen = useSelector(selectCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
