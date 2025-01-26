import "../styles/ShopBody.css";
import FilterComponent from "./FilterComponent";
import PlantCard from "./PlantCard";
import Cart from "./Cart";
import { useState } from "react";

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
];

export default function ShopBody() {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleShowCart = () => {
    setCartVisible(true);
  };

  const handleCloseCart = () => {
    setCartVisible(false);
  };

  return (
    <div className="shop-body-container">
      <div className="shop-sort-section">
        <div className="shop-sort-bar">
          <p>Sort By</p>
          <div className="shop-sort-options">
            <p>
              <b>Popular</b>
            </p>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/information-domain-security-cloud-network/chevron_down-1.png"
              alt="down-chevron"
              className="shop-sort-chevron"
            />
          </div>
        </div>
        <div className="shop-product-count">
          <p>Showing {plantsData.length} products</p>
        </div>
      </div>
      <div className="shop-content">
        <div className="shop-filters">
          <FilterComponent name="All Categories" />
          <FilterComponent name="Price" />
          <FilterComponent name="Include" />
        </div>
        <div className="shop-plant-grid">
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
      </div>
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}
