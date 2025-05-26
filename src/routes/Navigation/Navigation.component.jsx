import "./Navigation.styles.jsx";

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

// STYLED OCOMPONENTS
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            // signOutUser if returns undefined, it means user successfully logged out
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
