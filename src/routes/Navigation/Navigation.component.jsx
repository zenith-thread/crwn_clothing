import "./Navigation.styles.scss";

import { Outlet, Link } from "react-router";
import CrwnLogo from "../../assets/crown.svg?react";

// COMPONENT
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";

// AUTHENTICATION
import { signOutUser } from "../../utils/firebase/firebase.utils";

// CONTEXT
import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";
import { CartContext } from "../../contexts/Cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            // signOutUser if returns undefined, it means user successfully logged out
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
