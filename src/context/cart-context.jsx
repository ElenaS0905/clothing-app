import { createContext, useEffect, useState, useReducer } from "react";

const addCartItem = (cartItem, productToAdd) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearCartItem = (cartItems, cartToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemCart: () => {},
  clearCart: () => {},
  cartCount: 0,
  total: 0,
});

export const CART_ACTIONS_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_ITEMS",
  SET_TOTAL: "SET_TOTAL",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  // const payload = {
  //   cartItems,
  //   cartCount,
  //   total,
  // };

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default: {
      throw new Error(`error occurred in cartReducer unhandled ${type} `);
    }
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, seTotal] = useState(0);
  const [dispatch] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    seTotal(newTotal);
  }, [cartItems]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const updateCartItemsReducer = (newCartItems) => {};

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearCart = (cartToClear) => {
    setCartItems(clearCartItem(cartItems, cartToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemCart,
    clearCart,
    cartItems,
    cartCount,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// import { createContext, useEffect, useState } from "react";
//
// const addCartItem = (cartItem, productToAdd) => {
//   const existingCartItem = cartItem.find(
//       (cartItem) => cartItem.id === productToAdd.id
//   );
//
//   if (existingCartItem) {
//     return cartItem.map((cartItem) =>
//         cartItem.id === productToAdd.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//     );
//   }
//   return [...cartItem, { ...productToAdd, quantity: 1 }];
// };
//
// export const removeCartItem = (cartItems, productToRemove) => {
//   const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id === productToRemove.id
//   );
//
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
//   }
//   return cartItems.map((cartItem) =>
//       cartItem.id === productToRemove.id
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//   );
// };
//
// export const clearCartItem = (cartItems, cartToClear) =>
//     cartItems.filter((cartItem) => cartItem.id !== cartToClear.id);
//
// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemCart: () => {},
//   clearCart: () => {},
//   cartCount: 0,
//   total: 0,
// });
//
// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [total, seTotal] = useState(0);
//
//   useEffect(() => {
//     const newTotal = cartItems.reduce(
//         (total, cartItem) => total + cartItem.quantity * cartItem.price,
//         0
//     );
//     seTotal(newTotal);
//   }, [cartItems]);
//
//   useEffect(() => {
//     const newCartCount = cartItems.reduce(
//         (total, cartItem) => total + cartItem.quantity,
//         0
//     );
//     setCartCount(newCartCount);
//   }, [cartItems]);
//
//   const addItemToCart = (productToAdd) => {
//     setCartItems(addCartItem(cartItems, productToAdd));
//   };
//
//   const removeItemCart = (productToRemove) => {
//     setCartItems(removeCartItem(cartItems, productToRemove));
//   };
//
//   const clearCart = (cartToClear) => {
//     setCartItems(clearCartItem(cartItems, cartToClear));
//   };
//
//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemCart,
//     clearCart,
//     cartItems,
//     cartCount,
//     total,
//   };
//
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
