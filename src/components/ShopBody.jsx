import "../styles/ShopBody.css";
import FilterComponent from "./FilterComponent";
// import { usePlants } from "../context/PlantContext";
import PlantCard from "./PlantCard";

export default function ShopBody() {
  return (
    <div className="main-body">
      <div className="sort">
        <div className="search">
          <p>Sort By</p>
          <div className="right-side">
            <p>
              <b>Popular</b>
            </p>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/information-domain-security-cloud-network/chevron_down-1.png"
              alt="down-chevron"
              className="chevron"
            />
          </div>
        </div>
        <div className="item-number">
          <p>Showing 1003 products</p>
        </div>
      </div>
      <div className="shop">
        <div className="filters">
          <FilterComponent name="All Categories" />
          <FilterComponent name="Price" />
          <FilterComponent name="Include" />
        </div>
        <div className="plant-grid"></div>
      </div>
    </div>
  );
}
