// Create a navigation component that wraps the burger menu
import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../App";
import hamburger from "../../assets/images/burger-menu-1.svg";
import close from "../../assets/images/cross.svg";
import "./Navigation.scss";

export const Navigation = () => {
  const ctx = useContext(MyContext);

  return (
    <Menu
      customBurgerIcon={<img src={hamburger} alt="hamburger menu" />}
      customCrossIcon={<img src={close} alt="hamburger menu" />}
      isOpen={ctx.isMenuOpen}
      onStateChange={state => ctx.stateChangeHandler(state)}
      right
      width={`75px`}
    >
      <NavLink
        to="/"
        onClick={() => ctx.stateChangeHandler({ isOpen: false })}
        className="menu-item"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to="/travel"
        onClick={() => ctx.stateChangeHandler({ isOpen: false })}
        className="menu-item"
        activeClassName="active"
      >
        Travel
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => ctx.stateChangeHandler({ isOpen: false })}
        className="menu-item"
        activeClassName="active"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => ctx.stateChangeHandler({ isOpen: false })}
        className="menu-item"
        activeClassName="active"
      >
        Contact
      </NavLink>
    </Menu>
  );
};
