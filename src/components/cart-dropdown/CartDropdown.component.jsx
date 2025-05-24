import "./CartDropdown.styles.scss";

import { Link } from "react-router";

// COMPONENTS
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";

// CONTEXT
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Link to="/checkout">
        <Button>CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
