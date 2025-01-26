import "../styles/Hero.css";

export default function Hero({ header, description }) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-header">{header}</h1>
        <span className="hero-divider"></span>
        <p className="hero-description">{description}</p>
      </div>
    </div>
  );
}
