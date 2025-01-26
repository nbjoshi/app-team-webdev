import { useState } from "react";
import "../styles/FilterComponent.css";

export default function FilterComponent({ name }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleChevronClick = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className="rectangle-11">
      <div className="rectangle-header">
        <p>{name}</p>
        <div className="right" onClick={handleChevronClick}>
          {isDropdownVisible ? (
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/information-domain-security-cloud-network/chevron_up-1.png"
              alt="up-chevron"
              className="chevron"
            />
          ) : (
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/information-domain-security-cloud-network/chevron_down-1.png"
              alt="down-chevron"
              className="chevron"
            />
          )}
        </div>
      </div>
      {isDropdownVisible && (
        <div className="dropdown">
          <form>
            <label>
              Option 1:
              <input type="checkbox" name="option1" />
            </label>
            <label>
              Option 2:
              <input type="checkbox" name="option2" />
            </label>
            <label>
              Option 3:
              <input type="checkbox" name="option3" />
            </label>
          </form>
        </div>
      )}
    </div>
  );
}
