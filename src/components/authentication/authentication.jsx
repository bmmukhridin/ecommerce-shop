import React from "react";
import SignUpForm from "../sign-up-form/sign-up-form";
import SignInForm from "../sign-in-form copy/sign-in-form";
import "./authentication.style.scss"
function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;