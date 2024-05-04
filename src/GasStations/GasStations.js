



////////////////////





/////////////////////
import React, { useState } from 'react';
import axios from 'axios';

const GasStations = ({ apiKey, location }) => {
  const [gasStations, setGasStations] = useState([]);

  const getGasStations = async () => {
    try {
      const response = await axios.get('/api/v1/stations/nearby?userLong=30.99726187605872&userLat=29.990091438558945&minDistance=1&maxDistance=1000000', {
        params: {
          location,
          radius: 5000,
          type: 'gas_station',
          key: apiKey,
        },
      });

      setGasStations(response.data.results);
    } catch (error) {
      console.error('Error fetching gas stations:', error);
    }
  };

  return (
    <div>
      <button onClick={getGasStations}>The Nearest Station</button>
      <ul>
        {gasStations.map((station) => (
             <li key={station.place_id}>{station.name}</li>
             ))}
           </ul>
         </div>
       );
     };
     
     export default GasStations;