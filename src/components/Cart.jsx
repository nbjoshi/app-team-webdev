import "../styles/Cart.css";
import { useCart } from "../context/CartContext";

export default function Cart({ onClose }) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-popup">
      <div className="cart-popup-header">
        <h2>My Cart</h2>
        <button onClick={onClose} className="cart-popup-close">
          X
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.img_url}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <div className="details-header">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <p>Quantity</p>
              <div className="cart-buttons">
                <div className="cart-buttons-left">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <img
                  className="trash-can"
                  src="https://cdn-icons-png.flaticon.com/512/3515/3515498.png"
                  alt="Remove"
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
