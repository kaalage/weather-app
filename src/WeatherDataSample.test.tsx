import React from 'react';
import { render } from '@testing-library/react';
import WeatherDataSample from './WeatherDataSample';

test('renders WeatherDataSample component', () => {
  const { getByText } = render(<WeatherDataSample />);
  
  // Check if the component's title is rendered
  const titleElement = getByText('Weather Data');
  expect(titleElement).toBeInTheDocument();
});

test('renders data from mockData', () => {
  const { getByText } = render(<WeatherDataSample />);
  
  // Check if the data from mockData is rendered
  const device1Element = getByText('Device ID: Device1');
  expect(device1Element).toBeInTheDocument();
  
  const device2Element = getByText('Device ID: Device2');
  expect(device2Element).toBeInTheDocument();
  
  const timestamp1Element = getByText('Timestamp: 2023-10-05T12:00:00Z');
  expect(timestamp1Element).toBeInTheDocument();
  
  const timestamp2Element = getByText('Timestamp: 2023-10-05T13:00:00Z');
  expect(timestamp2Element).toBeInTheDocument();
  
  const temperature1Element = getByText('Temperature: 25');
  expect(temperature1Element).toBeInTheDocument();
  
  const temperature2Element = getByText('Temperature: 22');
  expect(temperature2Element).toBeInTheDocument();
  
  const humidity1Element = getByText('Humidity: 60');
  expect(humidity1Element).toBeInTheDocument();
  
  const humidity2Element = getByText('Humidity: 55');
  expect(humidity2Element).toBeInTheDocument();
});
