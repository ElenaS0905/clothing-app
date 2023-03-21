import "./button.style.scss";

const BUTTONS_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherPops }) => {
  return (
    <button
      className={`button-container ${BUTTONS_TYPE_CLASSES[buttonType]}`}
      {...otherPops}
    >
      {children}
    </button>
  );
};

export default Button;
