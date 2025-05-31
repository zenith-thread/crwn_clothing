import "./Navigation.styles.jsx";

import { Outlet, Link } from "react-router";
import CrwnLogo from "../../assets/crown.svg?react";

// COMPONENT
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";

// REDUX
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action.js";

// STYLED OCOMPONENTS
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles.jsx";

const Navigation = () => {
  const dispatch = useDispatch();

  // REDUX
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
