import React from "react";
import Header from "../components/Header";
import "../styles/Home.css";
import Hero from "../assets/hero.png";
import Button from "../components/Button";
import { useStore } from "../models/Store";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="heading">NEW ARRIVAL</div>
        <div className="hero-img">
          <img src={Hero} alt="" />
        </div>
        <div className="hero-container">
          <div className="hero-dets">
            <div className="hero-title">HITMAN 3</div>
            <div className="hero-dev">IO Interactive</div>
            <div className="hero-stock">Now available</div>
          </div>
          <div className="hero-price">
            <div className="hero-price-text">$60</div>
            <Button title="See All" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
