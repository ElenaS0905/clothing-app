import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  CheckoutImg,
  Price,
  Arrow,
  Value,
  Quantity,
  RemoveButton,
} from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
  const { clearCart, addItemToCart, removeItemCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImg as="img" src={imageUrl} alt={name} />
      </ImageContainer>
      <Name as="span">{name}</Name>
      <Quantity as="span">
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value as="span">{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price as="span">{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
