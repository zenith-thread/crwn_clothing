import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "./SignUpForm.styles.scss";

// COMPONENTS
import FormInput from "../form-input/FormInput.component";
import Button from "../button/Button.component";

const defautlFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defautlFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defautlFormFields);
  };

  const setFields = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();

      alert("User created successfully");
    } catch (err) {
      if (err.code === "(auth/email-already-in-use)") {
        alert("Cannot create user, email already in use");
      }
      console.log("Error creating the user,", err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={setFields}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={setFields}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={setFields}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={setFields}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
