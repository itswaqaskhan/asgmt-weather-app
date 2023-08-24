import React, { useState } from 'react';
import TemperatureToggle from './TemperatureToggle'; // Import the TemperatureToggle component

const SearchBar = ({ onSearch, onUnitChange }) => { // Add onUnitChange as a prop
  const [city, setCity] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city name" />
      <button onClick={handleSearch}>Search</button>
      <TemperatureToggle onUnitChange={onUnitChange} /> {/* Pass onUnitChange as a prop */}
    </div>
  );
};

export default SearchBar;
