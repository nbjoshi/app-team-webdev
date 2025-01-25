import "../styles/PlantCard.css";

export default function PlantCard({ id, img_url, name, price }) {
  return (
    <div className="card">
      <img src={img_url} alt={name} />
      <div className="text">
        <h2>{name}</h2>
        <p>{`$ ${price}`}</p>
      </div>
      <button>Buy</button>
    </div>
  );
}
