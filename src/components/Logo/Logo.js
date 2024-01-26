import NateLogo from "../../assets/images/NPLogoDropShadowInvert.png";
import { NavLink } from "react-router-dom";
import "./Logo.scss";

export const Logo = () => {
  return (
    <div className="logo">
      {" "}
      <NavLink to="/">
        <img className="logo__image" src={NateLogo} alt="logo" />
      </NavLink>
    </div>
  );
};
