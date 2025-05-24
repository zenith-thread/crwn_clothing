import { useState } from "react";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./SignInForm.styles.scss";

// COMPONENTS
import FormInput from "../form-input/FormInput.component";
import Button from "../button/Button.component";

const defautlFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defautlFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defautlFormFields);
  };

  const setFields = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          alert("Invalid credentials");
          break;

        case "auth/user-not-found":
          alert("User not found");
          break;

        case "auth/wrong-password":
          alert("Wrong password");
          break;

        default:
          console.log("Error signing in the user", err);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with Email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
