import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const TemperatureToggle = ({ unit, onUnitChange }) => {
  return (
    <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="unit-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        size="small"
        defaultValue="celsius"
      >
        <FormControlLabel value="celsius" control={<Radio />} label="Celsius" onChange={() => onUnitChange('celsius')}/>
        <FormControlLabel value="fahrenheit" control={<Radio />} label="Fahrenheit" onChange={() => onUnitChange('fahrenheit')}/>
      </RadioGroup>
    </FormControl>
  );
};

export default TemperatureToggle;
