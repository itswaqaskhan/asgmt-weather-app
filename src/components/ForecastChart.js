import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ForecastChart = ({ temperatureData, temperatureUnit }) => {
  
  const convertedTemperatures =
    temperatureUnit === 'celsius'
      ? temperatureData.temperatures
      : temperatureData.temperatures.map((celsius) => ((celsius * 9) / 5 + 32).toFixed(2));

const formattedTimeLabels = temperatureData.labels.map((label) => {
    const date = new Date(label);
    const roundedDate = new Date(date.getTime() + Math.round(date.getMinutes() / 60) * 60 * 60 * 1000);
    return roundedDate.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  });

  const chartData = {

    
    options: {
      xaxis: {
        categories: formattedTimeLabels, 
        title: {
          text: 'Time',
        },
      },
      yaxis: {
        title: {
          text: `Temperature (${temperatureUnit === 'celsius' ? '°C' : '°F'})`,
        },
      },

      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: undefined,
        width: 2,
        dashArray: 0, 
     }
    },
    series: [
      {
        name: `Temperature Forecast (${temperatureUnit === 'celsius' ? '°C' : '°F'})`,
        data: convertedTemperatures,
      },
    ],
  };

  return <ReactApexChart options={chartData.options} series={chartData.series} type="line" />;
};

export default ForecastChart;
