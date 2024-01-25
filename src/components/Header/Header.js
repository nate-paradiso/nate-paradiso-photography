import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
// import { MyContext } from "../../App";

export const Header = () => {
  // const ctx = useContext(MyContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__logo-text">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <p className="header__title">Nate Paradiso Photography</p>
      </div>
      {isMobile ? (
        <div>
          <Navigation />
        </div>
      ) : (
        // Render the full menu component here for larger screens
        <div className="full-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/travel">Travel</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
    </header>
  );
};
