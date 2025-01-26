import "../styles/PlantProductView.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

export default function PlantProductView({ plant }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isCartVisible, setCartVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      img_url: plant.img_url,
      quantity,
    });
    setCartVisible(true);
  };

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) => {
      if (operation === "increment") return prevQuantity + 1;
      if (operation === "decrement" && prevQuantity > 1)
        return prevQuantity - 1;
      return prevQuantity;
    });
  };

  const handleCloseCart = () => {
    setCartVisible(false);
  };

  return (
    <div className="plant-product-container">
      <NavLink to="/" className="plant-product-back-link">
        <img
          src="https://icons.veryicon.com/png/o/object/material-design-icons/chevron-left-1.png"
          alt="left-chevron"
          className="chevron"
        />
        Back to Search
      </NavLink>
      <div className="plant-product-body">
        <div className="plant-image-gallery">
          <img src={plant.img_url} alt="plant" className="plant-image" />
          <img src={plant.img_url} alt="plant" className="plant-image" />
          <img src={plant.img_url} alt="plant" className="plant-image" />
          <img src={plant.img_url} alt="plant" className="plant-image" />
        </div>
        <div className="plant-product-details">
          <div className="plant-info-section">
            <h1 className="plant-name">{plant.name}</h1>
            <p className="plant-price">${plant.price}</p>
            <p className="plant-description">{plant.description}</p>
          </div>
          <div>
            <div className="plant-size-section">
              <p className="plant-size-label">Size</p>
              <div className="plant-size-options">
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>
            </div>
            <div className="plant-cart-section">
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <div className="plant-quantity-section">
                <p className="quantity-label">Quantity</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange("decrement")}>
                    -
                  </button>
                  <p>{quantity}</p>
                  <button onClick={() => handleQuantityChange("increment")}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </div>
  );
}
