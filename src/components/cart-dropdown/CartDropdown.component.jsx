import "./CartDropdown.styles.scss";

import { Link, useNavigate } from "react-router";

// COMPONENTS
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";

// CONTEXT
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
