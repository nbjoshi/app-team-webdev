import "../styles/FilterComponent.css";

export default function FilterComponent({ name }) {
  return (
    <div className="rectangle-11">
      <p>{name}</p>
      <div className="right">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/information-domain-security-cloud-network/chevron_down-1.png"
          alt="down-chevron"
          className="chevron"
        />
      </div>
    </div>
  );
}
