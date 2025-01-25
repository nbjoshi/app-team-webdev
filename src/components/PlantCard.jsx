import "../styles/PlantCard.css";

export default function PlantCard({ img_url, name }) {
  return (
    <div className="card">
      <img src={img_url} alt={name} />
      <div className="text">
        <h2>{name}</h2>
        <p>$ 350</p>
      </div>
      <button>Buy</button>
    </div>
  );
}
