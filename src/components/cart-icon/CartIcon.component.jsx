// CONTEXT
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

// STYLED COMPONENTS
import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItemsCount } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{totalItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
