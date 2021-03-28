import React from "react";
import "../styles/Main.css";

const Header = () => {
  return (
    <div>
      <div className="top-bar">
        <div>
          <div className="logo">HIBOU</div>
        </div>
        <div className="nav-bar">
          <ul className="nav">
            <li className="nav-item">
              <a href="/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
