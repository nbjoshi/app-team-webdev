import "../styles/PlantProductView.css";
import { NavLink } from "react-router-dom";

export default function PlantProductView() {
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
          <img
            src="https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
            alt="plant"
          />
          <img
            src="https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
            alt="plant"
          />
          <img
            src="https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
            alt="plant"
          />
          <img
            src="https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
            alt="plant"
          />
        </div>
        <div className="plant-product-details">
          <div className="plant-info-section">
            <h1 className="plant-name">Marble Queen Pothos</h1>
            <p className="plant-price">$350</p>
            <p className="plant-description">
              Marble queen pothos is a popular houseplant that is known for its
              beautiful foliage. It is a relatively easy plant to care for,
              making it a good choice for beginners.
            </p>
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
              <button className="add-to-cart-button">Add to Cart</button>
              <div className="plant-quantity-section">
                <p className="quantity-label">Quantity</p>
                <div className="quantity-controls">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
