import "./cart-dropdown.style.scss";
import Button from "../button-component/button-component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECK OUT</Button>
    </div>
  );
};

export default CartDropdown;
