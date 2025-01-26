import "../styles/Navbar.css";
import { useState } from "react";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isCartVisible, setCartVisible] = useState(false);
  const { cartItems } = useCart();

  const handleShowCart = () => {
    setCartVisible(true);
  };

  const handleCloseCart = () => {
    setCartVisible(false);
  };

  const totalQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <>
      <header className="navbar-container">
        <div className="navbar-shipping-info">
          FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.
        </div>
      </header>
      <div className="navbar-header">
        <p className="navbar-logo-text">
          Green <span className="navbar-logo-highlight">Thumb</span>
        </p>
        <ul className="navbar-tabs">
          <li className="navbar-tab-item">Home</li>
          <li className="navbar-tab-item">Products</li>
          <li className="navbar-tab-item">About us</li>
          <li className="navbar-tab-item">Contact us</li>
        </ul>
        <div className="navbar-shop-section">
          <form className="navbar-search-form">
            <input
              type="text"
              placeholder="Search"
              className="navbar-search-input"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/c728/b99b/183f3d952c521a71688d1430060742b2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~Ttq9JhExso~U5cBIwGXX9Se7lbaZMOpUl8XFz3bA0RniAsb6Eleg21CY~xg2t2y1jGhwJ618uUPv1TbgOf4b6EboU2orhaWwi2NmnXhiX27SXbSVK~AxZUxG2CJ5xT353u5Tq-BpCcs9kzo~jWYVYh0jQHmSIZUAgD35CT3XH7h5Ki0vCK52rsU9aKonycWvtzzE4zIxkL1qfeMXsi2xAKzM43KMpMJsrNNqjC7IdeYQ1MkFRIpqBaqp93wj9UmiVivsHQjRQSzOHw2RG2c1rRgrmWC6ejlIW9tcJfcbbbQnKkIBNBQ1V~tcVMEaHV9BmDFMy9OY02ibKDac-Acg__"
              alt="search"
              className="navbar-search-icon"
            />
          </form>
          <span className="navbar-divider"></span>
          <img
            src="https://www.svgrepo.com/show/43071/shopping-bag.svg"
            className="navbar-shopping-bag-icon"
            onClick={handleShowCart}
          />
          <p className="navbar-cart-count">{totalQuantity}</p>
        </div>
      </div>
      {isCartVisible && <Cart onClose={handleCloseCart} />}
    </>
  );
}
