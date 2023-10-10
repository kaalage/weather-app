import React from 'react';
import { mockData } from './mockData';

const WeatherDataSample: React.FC = () => {
  return (
    <div>
      <h1>Weather Data</h1>
      {mockData.map((item, index) => (
        <div key={index}>
          <p>Device ID: {item.deviceId}</p>
          <p>Timestamp: {item.timestamp}</p>
          <p>Temperature: {item.temperature}</p>
          <p>Humidity: {item.humidity}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDataSample;
