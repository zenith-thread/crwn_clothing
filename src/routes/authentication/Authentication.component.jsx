import "./Authentication.styles.jsx";

// COMPONENTS
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import SignInForm from "../../components/sign-in-form/SignInForm.component";

// STYLED COMPONENTS
import { AuthenticationContainer } from "./Authentication.styles.jsx";

const Authentication = () => {
  return (
    <>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </>
  );
};

export default Authentication;
