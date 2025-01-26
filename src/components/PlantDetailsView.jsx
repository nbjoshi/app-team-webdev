import React, { useState } from "react";
import "../styles/PlantDetailsView.css";

export default function PlantDetailsView() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState("Watering");

  const handleChevronClick = (section) => {
    setActiveDropdown((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const renderDetails = () => {
    switch (selectedDetail) {
      case "Watering":
        return {
          header: "Watering",
          content: `Marble queen pothos is a relatively drought-tolerant plant, so it is important to avoid overwatering. If you overwater your plant, the leaves will start to yellow and fall off. If you underwater your plant, the leaves will start to wilt.

The best way to determine when to water your marble queen pothos is to stick your finger into the soil. If the top inch of soil is dry, it is time to water your plant.

When you water your marble queen pothos, water deeply until the water runs out of the drainage holes. This will ensure that the roots are getting enough water.`,
        };
      case "Sunlight":
        return {
          header: "Sunlight",
          content: `This plant prefers bright, indirect light but can tolerate low light conditions. Avoid direct sunlight as it can scorch the leaves.`,
        };
      default:
        return { header: "Select a detail", content: "" };
    }
  };

  const details = renderDetails();

  return (
    <div className="plant-details-container">
      <div className="padding"></div>
      <div className="rectangle-3850">
        <div className="dropdown-section">
          <div
            className="dropdown-header"
            onClick={() => handleChevronClick("Plant care")}
          >
            <span className="chevron">›</span>
            <span>Plant care</span>
          </div>
          {activeDropdown === "Plant care" && (
            <div className="dropdown">
              <p onClick={() => setSelectedDetail("Watering")}>Watering</p>
              <p onClick={() => setSelectedDetail("Sunlight")}>Sunlight</p>
              <p onClick={() => setSelectedDetail("Soil & Fertilizing")}>
                Soil & Fertilizing
              </p>
              <p onClick={() => setSelectedDetail("Humidity")}>Humidity</p>
              <p onClick={() => setSelectedDetail("Toxicity")}>Toxicity</p>
              <p onClick={() => setSelectedDetail("Benefits")}>Benefits</p>
            </div>
          )}
          <div
            className="dropdown-header"
            onClick={() => handleChevronClick("Origin story")}
          >
            <span className="chevron">›</span>
            <span>Origin story</span>
          </div>
          <div
            className="dropdown-header"
            onClick={() => handleChevronClick("Scientific data")}
          >
            <span className="chevron">›</span>
            <span>Scientific data</span>
          </div>
        </div>
      </div>
      <span className="care-divider"></span>
      <div className="care">
        <div className="care-filter-bar"></div>
        <div className="care-details">
          <h1>{details.header}</h1>
          <p>{details.content}</p>
        </div>
      </div>
    </div>
  );
}
