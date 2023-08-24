import React from 'react';

const TemperatureToggle = ({ unit, onUnitChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="celsius"
          checked={unit === 'celsius'}
          onChange={() => onUnitChange('celsius')}
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          value="fahrenheit"
          checked={unit === 'fahrenheit'}
          onChange={() => onUnitChange('fahrenheit')}
        />
        Fahrenheit
      </label>
    </div>
  );
};

export default TemperatureToggle;
