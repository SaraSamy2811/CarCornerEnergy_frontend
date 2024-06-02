import React, { useState, useEffect  } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../css/ManageStations.css";
import StationRow from './StationRow';
import 
{ ResponsiveContainer } 
from 'recharts';
import FooterAdmin from '../FooterAdmin';

const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: 35.7209, // Default latitude
  lng: -79.1766, // Default longitude
};

function ManageStations() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Fetch data from your database here
    // Example static data:
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Station 1', coordinates: '123,456', address: 'Address 1', description: 'Description 1' },
        { id: 2, name: 'Station 2', coordinates: '789,012', address: 'Address 2', description: 'Description 2' },
      ];
      setStations(data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setStations(stations.filter(station => station.id !== id));
  };

  const handleEdit = (updatedStation) => {
    setStations(stations.map(station => station.id === updatedStation.id ? updatedStation : station));
  };

/////////////////


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  const [placeName, setPlaceName] = useState("");
  const [Coordianates, setCoordianates] = useState("");
  const [address, setAddress] = useState("");
  const [Description, setDescription] = useState("");
  const [marker, setMarker] = useState(center);

  const handleMapClick = (event) => {
    setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Place Details:", { placeName, Coordianates, address, Description, marker });
    // Add functionality to submit the data to the server or API here
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;


 
  return (
      <div>
    <table>
    <thead>
      <tr>
        <th>Station Name</th>
        <th>Coordinates</th>
        <th>Address</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {stations.map(station => (
        <StationRow
          key={station.id}
          station={station}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </tbody>
  </table>

    <div className="container-add-stations">
      <h2>Add a station</h2>
      <form onSubmit={handleSubmit} className="place-form">
        <div className="form-group">
          <label>station name (required)*</label>
          <input
            type="text"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Coordianates (required)*</label>
          <input
            type="text"
            value={Coordianates}
            onChange={(e) => setCoordianates(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address (required)*</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Map Location</label>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={marker}
            onClick={handleMapClick}
          >
            <Marker position={marker} />
          </GoogleMap>
          <button type="button" onClick={() => setMarker(center)}>
            Edit map location
          </button>
        </div>
       
        <button type="submit">Submit</button>

       
      </form>

    </div>
    <ResponsiveContainer><FooterAdmin/> </ResponsiveContainer>
        
    </div>
  );
}

export default ManageStations;
