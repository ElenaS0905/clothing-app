import { CartItemContainer, ItemDetails, Name } from "./cart-item.style";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name as="span">{name}</Name>
        <span className="price">
          {quantity} x ${price}{" "}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
