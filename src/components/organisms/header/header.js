import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import NavBar from "../../molecules/navBar/navBar";
import "./header.css";
import logoGL from "../../../../Assets/logo.svg";
const logo = logoGL;

const Header = ({ menus }, logo) => (
  <section className="header_wrapper">
    <header>
      <span className="logo">{logoGL}</span>
      {menus.map(({ items, title }) => (
        <NavBar location="header" items={items} />
      ))}
    </header>
  </section>
);

Header.propTypes = {
  menus: arrayOf({
    items: arrayOf(
      shape({
        title: string.isRequired,
        url: string.isRequired,
      })
    ),
  }),
  logo: string,
  title: string,
};

Header.defaultProps = {
  menus: [],
  logo: logo,
};

export default Header;
