import "../styles/Recommendation.css";
import PlantCard from "./PlantCard";
import { useState } from "react";
import Cart from "../components/Cart";

export default function Recommendation() {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleShowCart = () => {
    setCartVisible(true);
  };

  const handleCloseCart = () => {
    setCartVisible(false);
  };
  const plantsData = [
    {
      id: 1,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcdRwqH1SP_csl3bwhokbK-V7BUxuTZMUaA&s",
      name: "Snake Plant",
      price: 350,
    },
    {
      id: 2,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcdRwqH1SP_csl3bwhokbK-V7BUxuTZMUaA&s",
      name: "Spider Plant",
      price: 200,
    },
    {
      id: 3,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcdRwqH1SP_csl3bwhokbK-V7BUxuTZMUaA&s",
      name: "Snake Plant",
      price: 350,
    },
    {
      id: 4,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcdRwqH1SP_csl3bwhokbK-V7BUxuTZMUaA&s",
      name: "Spider Plant",
      price: 200,
    },
  ];

  return (
    <div className="recommendation-container">
      <div className="recommendation-header">
        <h1>
          <span>You'll love </span>these too...
        </h1>
      </div>
      <div className="recommendation-grid">
        {plantsData.map((plant) => (
          <PlantCard
            key={plant.id}
            id={plant.id}
            img_url={plant.img_url}
            name={plant.name}
            price={plant.price}
            onBuy={handleShowCart}
          />
        ))}
      </div>
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}
