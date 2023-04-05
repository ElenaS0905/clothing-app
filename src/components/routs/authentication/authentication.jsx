import SignUpForm from "../../sign-up-form/sign-up-form";
import SignInForm from "../../sign-in-form/sign-in-form";
import { AuthenticationContainer } from "./authentication.style";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
