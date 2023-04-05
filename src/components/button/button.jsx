import {
  BaseButton,
  GoogleSignInButton,
  InvertedSignInButton,
} from "./button.style";

export const BUTTONS_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTONS_TYPE_CLASSES.base) =>
  ({
    [BUTTONS_TYPE_CLASSES.base]: BaseButton,
    [BUTTONS_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTONS_TYPE_CLASSES.inverted]: InvertedSignInButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherPops }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherPops}>{children}</CustomButton>;
};

export default Button;
