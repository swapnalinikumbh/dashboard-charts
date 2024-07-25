import React, { useState } from "react";
import "./CustomSearch.css";

const CustomSearch = ({
  value = "",
  onChange = () => {},
  onSearch = () => {},
  disableEndButton = true,
  className,
}) => {
  const [searchText, setSearchText] = useState(value);

  return (
    <div className="custom-search-container">
      <input
        height={40}
        type="text"
        // placeholder="Search here..."
        className={`custom-search-input ${className}`}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onChange(e.target.value);
        }}
      />
      {disableEndButton && (
        <button
          className="end-search-button"
          onClick={() => {
            onSearch(searchText);
          }}
        >
          Search
        </button>
      )}
    </div>
  );
};

export default CustomSearch;
