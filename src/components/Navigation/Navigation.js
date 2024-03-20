// Create a navigation component that wraps the burger menu
import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink, useLocation } from "react-router-dom";
import { MyContext } from "../../App";
import { Helmet } from "react-helmet";
import hamburger from "../../assets/images/burger-menu-1.svg";
import close from "../../assets/images/cross.svg";
import "./Navigation.scss";

export const Navigation = () => {
  const location = useLocation();
  const ctx = useContext(MyContext);

  return (
    <>
      <Helmet>
        <title>Nate Paradiso Photography - Seattle Photographer</title>
        <meta
          name="description"
          content="Nate Paradiso Photography - Seattle-based photographer specializing in weddings, portraits, underwater, and lifestyle photography. Crafting immersive visual content. Also providing web development services. Contact us for your photography needs."
        />
      </Helmet>
      <Menu
        customBurgerIcon={<img src={hamburger} alt=" " />}
        customCrossIcon={<img src={close} alt=" " />}
        isOpen={ctx.isMenuOpen}
        onStateChange={state => ctx.stateChangeHandler(state)}
        right
        width={`105px`}
      >
        <NavLink
          to="/"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Adventure
        </NavLink>
        <NavLink
          to="/weddings"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/weddings" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Weddings
        </NavLink>
        <NavLink
          to="/couples"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/couples" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Couples
        </NavLink>
        <NavLink
          to="/real-estate"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/real-estate" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Real Estate
        </NavLink>
        <NavLink
          to="/still-life"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/still-life" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Still Life
        </NavLink>
        <NavLink
          to="/video"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/video" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Video
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/about" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/blog" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => ctx.stateChangeHandler({ isOpen: false })}
          className={`menu-item ${
            location.pathname === "/contact" ? "menu-item--active" : "menu-item--inactive"
          }`}
        >
          Contact
        </NavLink>
      </Menu>
    </>
  );
};
