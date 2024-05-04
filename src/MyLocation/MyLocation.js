 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

function MyLocationMap() {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [nearestStation, setNearestStation] = useState(null);
    const [stations, setStations] = useState([]);
    const [gasStationMarkers, setGasStationMarkers] = useState([]);
    const [distanceToNearestStation, setDistanceToNearestStation] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }

        // Fetch stations data from the backend API
        axios.get('/api/v1/stations/nearby')
            .then(response => {
                setStations(response.data);
                alert('This is nearest station');
            })
            .catch(error => {
                console.error('Error fetching stations:', error);
                alert('This is not nearest station');
            });
    }, []);

    const handleFindNearestStation = () => {
        // Fetch stations data from the backend API
        axios.get('/api/v1/stations/nearby')
            .then(response => {
                const stations = response.data;
                let nearest = null;
                let minDistance = Number.MAX_VALUE;
                stations.forEach(station => {
                    const distance = calculateDistance(position.latitude, position.longitude, station.latitude, station.longitude);
                    if (distance < minDistance) {
                        minDistance = distance;
                        nearest = station;
                    }
                });
                setNearestStation(nearest);

                // Render the map markers for gas stations
                const gasStationMarkers = stations.map(station => (
                    <Marker key={station.id} position={[station.latitude, station.longitude]}>
                        <Popup>
                            {station.name}
                        </Popup>
                    </Marker>
                ));
                setGasStationMarkers(gasStationMarkers);

                setDistanceToNearestStation(minDistance * 1000); 
            })
            .catch(error => {
                console.error('Error fetching stations:', error);
            });
    };

    return (
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
            <h2>My Current Location</h2>
            {position.latitude && position.longitude ? (
                <p>
                    Latitude: {position.latitude}, Longitude: {position.longitude}
                </p>
            ) : (
                <p>Loading...</p>
            )}
            <div style={{ position: 'relative', width: '100%', paddingTop: '60%' }}>
                <MapContainer style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }} center={[position?.latitude || 0, position?.longitude || 0]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    
                    {/* Check if position exists before creating Marker */}
                    {position && position.latitude && position.longitude && (
                        <Marker position={[position.latitude, position.longitude]}>
                            <Popup>
                                Your Location
                            </Popup>
                        </Marker>
                    )}

                    {/* Adding gas station markers */}
                    {gasStationMarkers}
                </MapContainer>
            </div>
            <br />
            <button onClick={handleFindNearestStation}>Find Nearest Station</button>
            {nearestStation && (
                <p>{nearestStation.name}: {calculateDistance(position.latitude, position.longitude, nearestStation.latitude, nearestStation.longitude)} km away</p>
            )}
            {distanceToNearestStation && (
                <p>Distance to Nearest Station: {distanceToNearestStation} meters</p>
            )}
        </div>
    );
}

export default MyLocationMap;




///////////////تعديل اللى فيه up date
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function calculateDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
// }

// function MyLocation() {
//     const [position, setPosition] = useState({ latitude: null, longitude: null });
//     const [nearestStation, setNearestStation] = useState(null);
//     const [stations, setStations] = useState([]);

//     useEffect(() => {
//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(function (position) {
//                 setPosition({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                 });
//             });
//         } else {
//             console.log("Geolocation is not available in your browser.");
//         }

//         // Fetch stations data from the backend API
//         axios.get('/api/v1/stations/nearby')
//             .then(response => {
//                 setStations(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching stations:', error);
//             });
//     }, []);

//     const handleFindNearestStation = () => {
//         // Iterate over stations to find the nearest one
//         let nearest = null;
//         let minDistance = Number.MAX_VALUE;
//         stations.forEach(station => {
//             const distance = calculateDistance(position.latitude, position.longitude, station.latitude, station.longitude);
//             if (distance < minDistance) {
//                 minDistance = distance;
//                 nearest = station;
//             }
//         });
//         setNearestStation(nearest);
//     };

//     const handleUpdateLocation = () => {
//         // Send request to backend to update user's location
//         axios.post('/api/v1/stations/pin-station', {
//             latitude: position.latitude,
//             longitude: position.longitude
//         })
//         .then(response => {
//             console.log('Location updated successfully:', response.data);
//         })
//         .catch(error => {
//             console.error('Error updating location:', error);
//         });
//     };

//     return (
//         <div>
//             <h2>My Current Location</h2>
//             {position.latitude && position.longitude ? (
//                 <div>
//                     <p>
//                         Latitude: {position.latitude}, Longitude: {position.longitude}
//                     </p>
//                     <h3>Nearest Station:</h3>
//                     {nearestStation ? (
//                         <p>{nearestStation.name}: {calculateDistance(position.latitude, position.longitude, nearestStation.latitude, nearestStation.longitude)} km away</p>
//                     ) : (
//                         <p>No stations found.</p>
//                     )}
//                     <button onClick={handleFindNearestStation}>Find Nearest Station</button>
//                     <button onClick={handleUpdateLocation}>Update Location</button>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default MyLocation;


/////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// function calculateDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
//   }
// function MyLocation() {
//   const [position, setPosition] = useState({ latitude: null, longitude: null });
//   const [nearestStation, setNearestStation] = useState(null);
//   const [stations, setStations] = useState([
//     { name: 'Station 1', latitude: 40.712776, longitude: -74.005974 },
//     { name: 'Station 2', latitude: 34.052235, longitude: -118.243683 },
//     // Add more stations as needed
//   ]);

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         setPosition({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       });
//     } else {
//       console.log("Geolocation is not available in your browser.");
//     }
//   }, []);

//   return (
//     <div>
//       <h2>My Current Location</h2>
//       {position.latitude && position.longitude ? (
       
//        <div>
//           <p>
//             Latitude: {position.latitude}, Longitude: {position.longitude}
//           </p>
//           <h3>Stations:</h3>
//           <ul>
//             {stations.map(station => (
//               <li key={station.name}>
//                 {station.name}: {calculateDistance(position.latitude, position.longitude, station.latitude, station.longitude)} km away
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default MyLocation;