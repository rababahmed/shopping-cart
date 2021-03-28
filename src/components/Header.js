import React from "react";
import "../styles/Main.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="top-bar">
        <div>
          <a href="/">
            <div>
              <img src={Logo} alt="Logo" className="logo" />
            </div>
          </a>
        </div>
        <div className="nav-bar">
          <ul className="nav">
            <li className="nav-item">
              <a href="/shop">SHOP</a>
            </li>
            <li className="nav-item">
              <a href="/cart">CART</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
