import React, { useState } from 'react';
import './LocationField.css'



function LocationField() {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLocationSubmit = () => {
    // Handle location submission here
    console.log('Submitted location:', location);
  };

  return (
    <div className="location-field">
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={handleLocationChange}
      />
      <button onClick={handleLocationSubmit}>Submit</button>
    </div>
  );
}

export default LocationField;