import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  // const ctx = useContext(MyContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 825);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__logo-text">
        {
          <NavLink to="/">
            {/* <Logo /> */}
            <p className="header__title">Nate Paradiso Photography</p>
          </NavLink>
        }
      </div>
      {isMobile ? (
        <div>
          <Navigation />
        </div>
      ) : (
        // Render the full menu component here for larger screens
        <div className="header__full-menu">
          <NavLink
            className={`header__link ${
              location.pathname === "/" ? "header__link--active" : "header__link--inactive"
            }`}
            to="/"
          >
            Adventure
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/weddings" ? "header__link--active" : "header__link--inactive"
            }`}
            to="/weddings"
          >
            Weddings
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/couples" ? "header__link--active" : "header__link--inactive"
            }`}
            to="/couples"
          >
            Couples
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/realestate"
                ? "header__link--active"
                : "header__link--inactive"
            }`}
            to="/realestate"
          >
            Real Estate
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/still-life"
                ? "header__link--active"
                : "header__link--inactive"
            }`}
            to="/still-life"
          >
            Still Life
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/video" ? "header__link--active" : "header__link--inactive"
            }`}
            to="/video"
          >
            Video
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/about" ? "header__link--active" : "header__link--inactive"
            }`}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/blog" ? "header__link--active" : "header__link--inactive"
            }`}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={`header__link ${
              location.pathname === "/contact" ? "header__link--active" : "header__link--inactive"
            }`}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};
