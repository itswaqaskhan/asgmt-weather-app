import React, { useState } from 'react';
import TemperatureToggle from './TemperatureToggle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch, onUnitChange }) => { 
  const [city, setCity] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <h2>Weather App</h2>
      <TextField id="outlined-basic" size="small" label="City" variant="outlined" onChange={handleCityChange} placeholder="Enter city name"/>
      <Button variant="contained" onClick={handleSearch} style={{marginRight:20}}>Search</Button>
      <TemperatureToggle onUnitChange={onUnitChange} />
    </div>
  );
};

export default SearchBar;
