import React from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../Button-component/Button";
import CartItem from "../cart-item/cart-item.component";
// import { CartContext } from "../../context/cart.context(draft)";
import { selectCartItems } from "../../store/cart/cart.selector";

function CartDropDown() {
  const navigate = useNavigate()
  // const { cartItems } = useContext(CartContext);
   const cartItems  = useSelector(selectCartItems);
  const goToCheckoutHandler =()=>{
    navigate("/checkout")
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECK OUT!</Button>
    </div>
  );
}

export default CartDropDown;
