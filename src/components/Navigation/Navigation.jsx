import { Outlet, Link } from "react-router-dom";
import React, { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../../src/assest/crown.svg";
import "../Navigation/navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import {signOutUser} from "../utils/firebase/firebase.js"

function Navigation() {
  const { currentUser } = useContext(UserContext);
 
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
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link to="auth" className="nav-link">
              <div>SIGN IN</div>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
