import "../styles/PlantCard.css";
import { useCart } from "../context/CartContext";
import { useState, useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import { useNavigate } from "react-router-dom";

export default function PlantCard({ id, img_url, name, price, onBuy }) {
  const { addToCart } = useCart();
  const { getPlantById } = useContext(PlantContext);
  const navigate = useNavigate();

  const handleBuy = (e) => {
    e.stopPropagation();
    addToCart({ id, img_url, name, price });
    onBuy();
  };

  const handleNavigate = () => {
    navigate(`/plant/${id}`);
  };

  return (
    <div className="plant-card-container" onClick={handleNavigate}>
      <div className="plant-card-image-wrapper">
        <img src={img_url} alt={name} className="plant-card-image" />
      </div>
      <div className="plant-card-text">
        <h2 className="plant-card-name">{name}</h2>
        <p className="plant-card-price">$ {price}</p>
      </div>
      <button className="plant-card-buy-button" onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
}
