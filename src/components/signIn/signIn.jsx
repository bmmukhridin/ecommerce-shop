import React from "react";
import { signInWithGooglePopup } from "../utils/firebase/firebase";

function SignIn() {
  const logGoogleUser = async function () {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <p>sign in</p>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
}

export default SignIn;
