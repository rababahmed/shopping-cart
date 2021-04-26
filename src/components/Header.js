import React from "react";
import "../styles/Main.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useStore } from "../models/Store";

const Header = () => {
  const cartItems = useStore((state) => state.cart);
  return (
    <div>
      <div className="top-bar">
        <div>
          <Link to="/shopping-cart/">
            <div>
              <img src={Logo} alt="Logo" className="logo" />
            </div>
          </Link>
        </div>
        <div className="nav-bar">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/shopping-cart/shop">SHOP</Link>
            </li>
            <li className="nav-item">
              <Link to="/shopping-cart/cart">
                CART <span>{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
