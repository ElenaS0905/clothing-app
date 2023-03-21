import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./nav_bar.style.scss";
import { UserContext } from "../../../context/user-context";
import { signOutUser } from "../../../utils/firebase/firebase-utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SING IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
