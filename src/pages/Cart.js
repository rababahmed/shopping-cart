import React from "react";
import Header from "../components/Header";
import { useStore } from "../models/Store";
import { games } from "../models/Games";
import "../styles/Home.css";
import "../styles/Cart.css";
import Button from "../components/Button";

const Cart = () => {
  const cartItems = useStore((state) => state.cart);
  const totalCost = cartItems.reduce((prev, current) => {
    const game = games.find((g) => g.id === current.id);
    const gamePrice = game.price * current.count;
    return prev + gamePrice;
  }, 0);
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="heading">Cart</div>
        <div className="cart-container">
          <div className="product-grid">
            <div className="table-hdata">Product Name</div>
            <div className="table-hdata">Price</div>
            <div className="table-hdata">Quantity</div>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((game) => (
              <div className="product-grid" key={game.id}>
                <div className="table-data">{game.title}</div>
                <div className="table-data">${game.price}</div>
                <div className="table-data">{game.count}</div>
              </div>
            ))
          ) : (
            <div className="heading">No items in cart</div>
          )}
        </div>
        <div>
          {cartItems.length > 0 ? (
            <div className="total-container">
              <div className="total-grid">
                <div className="total-data">Subtotal</div>
                <div className="total-data">${totalCost}</div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="checkout-btn">
          {cartItems.length > 0 ? (
            <Button
              onClick={() => alert("Checkout functionality is not available")}
              title="Checkout"
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
