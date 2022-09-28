import { Outlet, Link } from "react-router-dom";
import React, { Fragment } from "react";
import {useSelector} from 'react-redux'


import { ReactComponent as CrwnLogo } from "../../../src/assest/crown.svg";
import "../Navigation/navigation.styles.scss";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../utils/firebase/firebase.js";
import CartIcon from "../cart.icon/cart.icon.component";
import CartDropDown from "../cart.dropDown/cart.dropdown";
// import { CartContext } from "../../context/cart.context(draft)";


function Navigation() {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectCartOpen)
  
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            <div>SHOP</div>
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="auth" className="nav-link">
              <div>SIGN IN</div>
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
