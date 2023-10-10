import React from 'react';
import './App.css';
import WeatherDataSample from './WeatherDataSample';
// import WeatherData from './WeatherData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherDataSample />
        {/* <WeatherData /> */}
      </header>
    </div>
  );
}

export default App;

