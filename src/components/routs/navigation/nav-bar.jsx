import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user-context";
import { signOutUser } from "../../../utils/firebase/firebase-utils";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropdown from "../../card-dropdown/cart-dropdown";
import { CartContext } from "../../../context/cart-context";
import { Logo, NavBarContainer, NavLinks, NavLink } from "./nav-bar.style";
import "./nav-bar.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavBarContainer>
        <Logo to="/">
          <CrownLogo />
        </Logo>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SING IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavBarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
