import "../styles/Hero.css";

export default function Hero({ header, description }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>{header}</h1>
        <span className="divider"></span>
        <p>{description}</p>
      </div>
    </div>
  );
}
