import SignUpForm from "../../sign-up-form/sign-up-form-component";
import SignInForm from "../../sign-in-form/sign-in-form-component";
import "./authentication.styel.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <h1>Sign in page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
