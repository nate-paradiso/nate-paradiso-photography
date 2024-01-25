import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-text">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <p className="header__title">Nate Paradiso Photography</p>
        </div>
        <div>
          <CustomIcon />
          <Navigation />
        </div>
      </header>
    </>
  );
};
