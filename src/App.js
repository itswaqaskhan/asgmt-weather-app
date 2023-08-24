import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import ForecastChart from './components/ForecastChart';
import fetchWeatherData from './api/weatherApi';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');
  const [temperatureChartData, setTemperatureChartData] = useState({
    labels: [],
    temperatures: [],
  });


  const handleSearch = async (city) => {
    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData(data);
      setTemperatureChartData({
        labels: data.forecast.labels,
        temperatures: data.forecast.temperatures,
      });
    } else {
      setWeatherData({});
      setTemperatureChartData({ labels: [], temperatures: [] });
    }
  };

  const handleUnitChange = (unit) => {
    setTemperatureUnit(unit);
  };

  useEffect(() => {
    handleSearch('DefaultCity');
  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} onUnitChange={handleUnitChange} />
      <WeatherDisplay weatherData={weatherData} temperatureUnit={temperatureUnit} />
      {temperatureChartData.labels.length > 0 && ( 
        <ForecastChart temperatureData={temperatureChartData} temperatureUnit={temperatureUnit} />
      )}
    </div>
  );
};

export default App;
