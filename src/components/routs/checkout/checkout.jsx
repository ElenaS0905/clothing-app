import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import CheckoutItem from "../../checkout-item/checkout-item";
import {
  CheckoutContainer,
  Total,
  Header,
  HeaderBlock,
} from "./checkout.style";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total as="span">Total: ${total}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
