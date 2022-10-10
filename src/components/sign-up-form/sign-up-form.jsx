import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
//import { UserContext } from "../../context/user.context";
//import {creatAuthUserWithEmailAndPassword, createUserDocumentFromAuth,} from "../utils/firebase/firebase";
import FormInput from "../Form-input/form-input";
import "./sign-up.style.scss";
import Button from "../Button-component/Button";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  const dispatch = useDispatch();
  // const { setCurrentUser} = useContext(UserContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password is not matching");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email alrady in use");
      } else {
        console.log("user creation encountered an error");
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
