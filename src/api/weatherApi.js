// src/api/weatherApi.js

const API_KEY = '107c590b114e6d3a97567195f3f1ab79';

const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Weather data not available');
    }

    const data = await response.json();

    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
    };

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!forecastResponse.ok) {
      throw new Error('Forecast data not available');
    }

    const forecastData = await forecastResponse.json();

    const forecastChartData = {
      labels: forecastData.list.map((item) => item.dt_txt),
      temperatures: forecastData.list.map((item) => item.main.temp),
    };

    return { ...weatherData, forecast: forecastChartData };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export default fetchWeatherData;
