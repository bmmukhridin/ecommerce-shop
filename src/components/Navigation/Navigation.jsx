import { Outlet, Link } from "react-router-dom";
import React, { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../../src/assest/crown.svg"
import "../Navigation/navigation.styles.scss"

function Navigation() {
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
          <Link to="auth" className="nav-LINK">
            <div>SIGN IN</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
