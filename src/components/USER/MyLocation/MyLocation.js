import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// تحديد مسار الصور داخل مجلد الـ Leaflet
const gasStationIcon = process.env.PUBLIC_URL + '/leaflet/red-map-pin-with-gas-station-sign-icon-isolated-vector-14374487.jpg';
const userIcon = process.env.PUBLIC_URL + '/leaflet/marker-icon.png';

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance;
}

function MyLocationMap() {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [nearestStation, setNearestStation] = useState(null);
    const [distanceToNearestStation, setDistanceToNearestStation] = useState(null);
    const [gasStations, setGasStations] = useState([]);
    const [mapCenter, setMapCenter] = useState([0, 0]);
    const [route, setRoute] = useState([]);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("your location invalied");
        }

       
        axios.get('/api/v1/stations/getAllStations')
            .then(response => {
                const stations = response.data.data; 
                setGasStations(stations);
            })
            .catch(error => {
                console.error('error to fetch station', error);
            });
    }, []);

    const handleFindNearestStation = () => {
        let nearest = null;
        let minDistance = Number.MAX_VALUE;
        gasStations.forEach(station => {
            const distance = calculateDistance(position.latitude, position.longitude, station.station.coordinates[1], station.station.coordinates[0]);
            if (distance < minDistance) {
                minDistance = distance;
                nearest = station;
            }
        });
        setNearestStation(nearest);
        setDistanceToNearestStation(minDistance);
        if (nearest) {
            setMapCenter([nearest.station.coordinates[1], nearest.station.coordinates[0]]);
            setRoute([[position.latitude, position.longitude], [nearest.station.coordinates[1], nearest.station.coordinates[0]]]);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#343a40', marginBottom: '20px' }}>Gas Stations Near You</h1>
            {position.latitude && position.longitude ? (
                <div>
                    <p>Latitude: {position.latitude}</p>
                    <p>Longitude: {position.longitude}</p>
                    <button
                        onClick={handleFindNearestStation}
                        style={{
                            backgroundColor: '#ffc107',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            marginBottom: '20px'
                        }}
                    >
                        Find Near Current Location
                    </button>
                    {nearestStation && (
                        <div style={{ marginBottom: '20px' }}>
                            {/* <h3 style={{ color: '#343a40' }}>Nearest Station</h3> */}
                            {/* <p><strong>Name:</strong> {nearestStation.StationName}</p>
                            <p><strong>Distance:</strong> {distanceToNearestStation ? distanceToNearestStation.toFixed(2) : 'Unknown'} km</p>
                            <p><strong>Address:</strong> {nearestStation.address}</p>
                            <p><strong>Description:</strong> {nearestStation.description}</p> */}
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading your location...</p>
            )}
            {position.latitude && position.longitude && (
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', zIndex: '1000' }}>
                        {nearestStation && (
                            <div>
                                <h3 style={{ color: '#343a40' }}>Nearest Station</h3>
                                <p><strong>Name:</strong> {nearestStation.StationName}</p>
                                <p><strong>Distance:</strong> {distanceToNearestStation ? distanceToNearestStation.toFixed(2) : 'Unknown'} km</p>
                                <p><strong>Address:</strong> {nearestStation.address}</p>
                                <p><strong>Description:</strong> {nearestStation.description}</p>
                            </div>
                        )}
                    </div>
                    <MapContainer center={[position.latitude, position.longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {gasStations.map(station => (
                            <Marker key={station._id} position={[station.station.coordinates[1], station.station.coordinates[0]]} icon={L.icon({ iconUrl: gasStationIcon, iconSize: [30, 30], iconAnchor: [15, 30] })}>
                                <Popup>
                                    {station.StationName}
                                    <p><strong>Address:</strong> {station.address}</p>
                                    <p><strong>Description:</strong> {station.description}</p>
                                </Popup>
                            </Marker>
                        ))}
                        {position.latitude && position.longitude && (
                            <Marker position={[position.latitude, position.longitude]} icon={L.icon({ iconUrl: userIcon })}>
                                <Popup>
                                    Your Current Location
                                </Popup>
                            </Marker>
                        )}
                        {route.length > 0 && <Polyline positions={route} color="blue" />}
                    </MapContainer>
                </div>
            )}
        </div>
    );
}

export default MyLocationMap;


//  import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

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

// function MyLocationMap() {
//     const [position, setPosition] = useState({ latitude: null, longitude: null });
//     const [nearestStation, setNearestStation] = useState(null);
//     const [StationName, setStations] = useState([]);
//     const [gasStationMarkers, setGasStationMarkers] = useState([]);
//     const [distanceToNearestStation, setDistanceToNearestStation] = useState(null);

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
//         axios.get('/api/v1/stations/getAllStations')
//             .then(response => {
//                 setStations(response.data);
//                 alert('There is all station');
//             })
//             .catch(error => {
//                 console.error('Error fetching stations:', error);
//                 alert('There is not all station');
//             });
//     }, []);

//     const handleFindNearestStation = () => {
//         // Fetch stations data from the backend API
//         axios.get('/api/v1/stations/nearby', {
//             params: {
//                 userLat: position.latitude,
//                 userLong: position.longitude,
//                 minDistance: 0, // Provide appropriate min distance
//                 maxDistance: 10000 // Provide appropriate max distance
//             }
          
//         })
//         .then(response => {
//             const StationName = response.data.data; // Extract stations from response
//             let nearest = null;
//             let minDistance = Number.MAX_VALUE;
//             StationName.forEach(StationName => {
//                 const distance = calculateDistance(position.latitude, position.longitude, StationName.name.coordinates[1], StationName.name.coordinates[0]); // Adjust coordinates extraction
//                 if (distance < minDistance) {
//                     minDistance = distance;
//                     nearest = StationName;
//                 }
//             }
           
//         )
//         alert('There is nearest station');
//         ;
//             setNearestStation(nearest);
    
//             // Render the map markers for gas stations
//             const gasStationMarkers = StationName.map(station => (
//                 <Marker key={station._id} position={[StationName.name.coordinates[1], StationName.name.coordinates[0]]}> {/* Adjust coordinates extraction */}
//                     <Popup>
//                         {StationName.name}
//                     </Popup>
//                 </Marker>
//             ));
//             setGasStationMarkers(gasStationMarkers);
    
//             setDistanceToNearestStation(minDistance * 1000); 
//         })
//         .catch(error => {
//             console.error('Error fetching stations:', error);
//         });
//     };
    
//     return (
//         <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
//             <h2>My Current Location</h2>
//             {position.latitude && position.longitude ? (
//                 <p>
//                     Latitude: {position.latitude}, Longitude: {position.longitude}
//                 </p>
//             ) : (
//                 <p>Loading...</p>
//             )}
//             <div style={{ position: 'relative', width: '100%', paddingTop: '60%' }}>
//                 <MapContainer style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }} center={[position?.latitude || 0, position?.longitude || 0]} zoom={13}>
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    
//                     {/* Check if position exists before creating Marker */}
//                     {position && position.latitude && position.longitude && (
//                         <Marker position={[position.latitude, position.longitude]}>
//                             <Popup>
//                                 Your Location
//                             </Popup>
//                         </Marker>
//                     )}

//                     {/* Adding gas station markers */}
//                     {gasStationMarkers}
//                 </MapContainer>
//             </div>
//             <br />
//             <button onClick={handleFindNearestStation}>Find Nearest Station</button>
//             {nearestStation && (
//                 <p>{nearestStation.name}: {calculateDistance(position.latitude, position.longitude, nearestStation.latitude, nearestStation.longitude)} km away</p>
//             )}
//             {distanceToNearestStation && (
//                 <p>Distance to Nearest Station: {distanceToNearestStation} meters</p>
//             )}
//         </div>
//     );
// }

// export default MyLocationMap;




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