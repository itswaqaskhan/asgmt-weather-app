import React from 'react';
import { Paper, Typography, Alert } from '@mui/material';
import './WeatherDisplay.css'; 

const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

const WeatherDisplay = ({ weatherData, temperatureUnit }) => {
  if (!weatherData.city) {
    // No weather data available, show a message
    return (
    <Alert icon={false} severity="info">
      Please search for a city
    </Alert>
    );
  }

  const temperatureValue =
    temperatureUnit === 'celsius' ? weatherData.temperature : convertToFahrenheit(weatherData.temperature);

  return (
    <Paper elevation={3} className="weather-display">
      <Typography variant="h5" className="city-name">
        Weather Conditions for {weatherData.city}
      </Typography>
      <div className="weather-info">
        <div className="weather-icon">
          <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt={ weatherData.description } />
        </div>
        <Typography variant="subtitle1" className="temperature">
          Temperature: {temperatureValue} {temperatureUnit === 'celsius' ? '°C' : '°F'}
        </Typography>
        <Typography variant="body2" className="weather-description">
          Weather: {weatherData.description}
        </Typography>
        <Typography variant="body2" className="humidity">
          Humidity: {weatherData.humidity}%
        </Typography>
        <Typography variant="body2" className="wind-speed">
          Wind Speed: {weatherData.windSpeed} km/h
        </Typography>
      </div>
    </Paper>
  );
};

export default WeatherDisplay;



// import React from 'react';

// const convertToFahrenheit = (celsius) => {
//     return (celsius * 9) / 5 + 32;
//   };
  
//   const WeatherDisplay = ({ weatherData, temperatureUnit }) => {
//     const temperatureValue =
//       temperatureUnit === 'celsius' ? weatherData.temperature : convertToFahrenheit(weatherData.temperature);
  
//     return (
//       <div>
//         <h2>Weather Conditions for {weatherData.city}</h2>
//         <p>Temperature: {temperatureValue} {temperatureUnit === 'celsius' ? '°C' : '°F'}</p>
//         <p>Weather: {weatherData.description}</p>
//         <p>Humidity: {weatherData.humidity}%</p>
//         <p>Wind Speed: {weatherData.windSpeed} km/h</p>
//       </div>
//     );
//   };
  
//   export default WeatherDisplay;
