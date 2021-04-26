import React from "react";
import Header from "../components/Header";
import { useStore } from "../models/Store";
import { games } from "../models/Games";
import Button from "../components/Button";
import "../styles/Home.css";
import "../styles/Shop.css";

const Shop = () => {
  const increaseCartItems = useStore((state) => state.increaseCartItems);
  const addToCart = useStore((state) => state.addToCart);
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="heading">ALL GAMES</div>
        <div className="shop-grid">
          {games.map((game) => (
            <div key={game.id}>
              <div>
                <img src={game.url} className="game-img" alt="" />
              </div>
              <div className="product-title">{game.title}</div>
              <div className="product-price">${game.price}</div>
              <Button
                onClick={() =>
                  addToCart(game.id, game.title, game.price, game.url)
                }
                title="Add to Cart"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
