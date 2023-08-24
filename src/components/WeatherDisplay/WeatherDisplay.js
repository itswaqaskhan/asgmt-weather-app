import React from 'react';
import { Paper, Typography, Alert } from '@mui/material';
import './WeatherDisplay.css'; 
import Grid from '@mui/material/Grid';

const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

const WeatherDisplay = ({ weatherData, temperatureUnit }) => {
  if (!weatherData.city) {
    return (
    <Alert icon={false} severity="info">
      Please search for a city
    </Alert>
    );
  }

  const temperatureValue =
    temperatureUnit === 'celsius' ? Math.round(weatherData.temperature) : Math.round(convertToFahrenheit(weatherData.temperature));

  return (
    <Paper elevation={3} className="weather-display">
      <Typography variant="h5" className="city-name">
        {weatherData.city}
      </Typography>


      <div className="weather-info">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="weather-icon">
          <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt={ weatherData.description } />
          <span className="temperature"><span>{temperatureValue}</span> {temperatureUnit === 'celsius' ? '°C' : '°F'}</span>
        </div>
        </Grid>
        <Grid item xs={4} className='weather-more-info'>
          <Typography variant="body2" className="weather-description">
          Weather: {weatherData.description}
        </Typography>
        <Typography variant="body2" className="humidity">
          Humidity: {weatherData.humidity}%
        </Typography>
        <Typography variant="body2" className="wind-speed">
          Wind: {weatherData.windSpeed} km/h
        </Typography>
        </Grid>

      </Grid>


      </div>
    </Paper>
  );
};

export default WeatherDisplay;
