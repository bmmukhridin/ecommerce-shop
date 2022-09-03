import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
import SignUpForm from "../sign-up-form/sign-up-form";
import SignInForm from "../sign-in-form copy/sign-in-form";
function Authentication() {
  return (
    <div>
      <p>sign in</p>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
