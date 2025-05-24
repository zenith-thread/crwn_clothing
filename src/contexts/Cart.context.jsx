import { createContext, useState, useEffect } from "react";

// HELPER FUNCTIONS
const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCarItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCarItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems contains productToAdd
  const existingCarItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCarItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, productToDelete) => {
  // find if cartItems contains productToAdd
  const existingCarItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCarItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }
};
// CONTEXT
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  totalItemsCount: 0,
  totalCartAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  useEffect(() => {
    const totalCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );
    setTotalItemsCount(totalCount);
  }, [cartItems]);

  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );
    setTotalCartAmount(totalAmount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    totalItemsCount,
    totalCartAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
