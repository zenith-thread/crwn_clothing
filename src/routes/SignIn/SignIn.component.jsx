import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// Components
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import Button from "../../components/button/Button.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>
        <h1>Sign In</h1>
        <Button onClick={logGoogleUser} buttonType="google">
          Sign in With Google
        </Button>
      </div>
      <SignUpForm />
    </>
  );
};

export default SignIn;
