import "../styles/PlantCard.css";
import { useCart } from "../context/CartContext";

export default function PlantCard({ id, img_url, name, price, onBuy }) {
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart({ id, img_url, name, price });
    onBuy();
  };

  return (
    <div className="plant-card-container">
      <img src={img_url} alt={name} className="plant-card-image" />
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
