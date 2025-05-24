import "./CartIcon.styles.scss";

import ShoppingIcon from "../../assets/shopping-bag.svg?react";

// CONTEXT
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItemsCount } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItemsCount}</span>
    </div>
  );
};

export default CartIcon;
