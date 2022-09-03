import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase";

function SignIn() {
  const logGoogleUser = async function () {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return (
    <div>
      <p>sign in</p>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
}

export default SignIn;
