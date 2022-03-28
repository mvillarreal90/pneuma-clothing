import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PneumaLogo } from "../../assets/pneuma.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <PneumaLogo className='logo' />
        </Link>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='nav-link' to='/sign-in'>
          SIGN IN
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
