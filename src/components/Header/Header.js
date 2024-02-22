import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
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
      <div className="header-nav__logo-text">
        {
          <NavLink to="/">
            <p className="header-nav__title">Nate Paradiso Photography</p>
          </NavLink>
        }
      </div>
      <nav className="header-nav__container">
        {isMobile ? (
          <div>
            <Navigation />
          </div>
        ) : (
          // Render the full menu component here for larger screens
          <div className="header-nav__full-menu">
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/"
            >
              Adventure
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/weddings"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/weddings"
            >
              Weddings
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/couples"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/couples"
            >
              Couples
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/real-estate"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/real-estate"
            >
              Real Estate
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/still-life"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/still-life"
            >
              Still Life
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/video"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/video"
            >
              Video
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/about"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/blog"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={`header-nav__link ${
                location.pathname === "/contact"
                  ? "header-nav__link--active"
                  : "header-nav__link--inactive"
              }`}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};
