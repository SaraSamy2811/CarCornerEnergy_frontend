import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../css/ManageStations.css";
import "./OpeningDateForm";

const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: 35.7209, // Default latitude
  lng: -79.1766, // Default longitude
};

function ManageStations() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  const [placeName, setPlaceName] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [locatedWithin, setLocatedWithin] = useState("");
  const [marker, setMarker] = useState(center);

  const handleMapClick = (event) => {
    setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Place Details:", { placeName, category, address, locatedWithin, marker });
    // Add functionality to submit the data to the server or API here
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;


   // Your logic for handling the button click goes here
   const handleButtonClick = () => {
    // Implement your desired behavior
    console.log('Opening date button clicked!');
  };
  return (
    <div className="container-add-stations">
      <h2>Add a Place</h2>
      <form onSubmit={handleSubmit} className="place-form">
        <div className="form-group">
          <label>Place name (required)*</label>
          <input
            type="text"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Category (required)*</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          <label>Located within</label>
          <input
            type="text"
            value={locatedWithin}
            onChange={(e) => setLocatedWithin(e.target.value)}
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
        <button onClick={handleButtonClick}>
      Opening date
      {/* You can add the right-pointing arrow icon here */}
    </button>
        <button type="submit">Submit</button>

       
      </form>
    </div>
  );
}

export default ManageStations;
