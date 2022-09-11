import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../Button-component/Button";
import CartItem from "../cart-item/cart-item.component";

function CartDropDown() {
  return <div className="cart-dropdown-container">
<div className="cart-items">
  {[]. map((item)=>{
    
  })}
</div>
<Button>GO TO CHECK OUT!</Button>
  </div>;
}

export default CartDropDown;
