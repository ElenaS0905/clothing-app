import styled from "styled-components";
import {
  BaseButton,
  InvertedSignInButton,
  GoogleSignInButton,
} from "../button/button.style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 265px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${InvertedSignInButton}, ${GoogleSignInButton} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: 265px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;
//
//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }
//
//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }
//
//   button {
//     margin-top: auto;
//   }
// }
