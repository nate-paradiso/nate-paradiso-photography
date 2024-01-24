import Logo from "../../assets/images/NPLogoDropShadowInvert.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header__logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
    </>
  );
};
