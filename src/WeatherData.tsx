// import React, { useEffect, useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
// import { ListWeatherDatasQuery } from './API';

// const WeatherData: React.FC = () => {
//   const [weatherData, setWeatherData] = useState<ListWeatherDatasQuery | undefined>();

//   useEffect(() => {
//     async function fetchWeatherData() {
//       try {
//         const response = await API.graphql(graphqlOperation(listWeatherDatas));
//         const data = response.data as ListWeatherDatasQuery;
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     }

//     fetchWeatherData();
//   }, []);

//   return (
//     <div>
//       <h1>Weather Data</h1>
//       {weatherData?.listWeatherDatas?.items.map((item) => (
//         <div key={item?.id}>
//           <p>Device ID: {item?.deviceId}</p>
//           <p>Timestamp: {item?.timestamp}</p>
//           <p>Temperature: {item?.temperature}</p>
//           <p>Humidity: {item?.humidity}</p>
//           {/* Add more fields as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WeatherData;
export default {};
