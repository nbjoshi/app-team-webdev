import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <ul className="footer-links-list">
          <li className="footer-link-item">Products</li>
          <li className="footer-link-item">Returns</li>
          <li className="footer-link-item">FAQ</li>
          <li className="footer-link-item">Shipping</li>
          <li className="footer-link-item">About us</li>
          <li className="footer-link-item">Contact us</li>
        </ul>
        <ul className="footer-social-icons">
          <li className="footer-icon-item">
            <img src="https://static.vecteezy.com/system/resources/previews/042/127/152/non_2x/black-youtube-logo-on-transparent-background-icon-free-png.png" />
          </li>
          <li className="footer-icon-item">
            <img src="https://www.pngmart.com/files/23/Black-Facebook-Logo-PNG-Pic.png" />
          </li>
          <li className="footer-icon-item">
            <img src="https://freepngimg.com/download/icon/logo/62843-icons-media-twitter-computer-black-social-logo.png" />
          </li>
          <li className="footer-icon-item">
            <img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" />
          </li>
          <li className="footer-icon-item">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-1-logo-black-and-white.png" />
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>
          COPYRIGHT GREEN THUMB. ALL RIGHTS <br></br>RESERVED
        </p>
      </div>
    </div>
  );
}
