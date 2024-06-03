import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../css/ManageStations.css";
<<<<<<< HEAD
import StationRow from "./StationRow";
import { useParams } from 'react-router-dom';
=======
import StationRow from './StationRow';
import 
{ ResponsiveContainer } 
from 'recharts';
import FooterAdmin from '../FooterAdmin';
>>>>>>> 12a47d4e37624fde6045ece61c4f444a83f6d6f4

const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: 35.7209, // Default latitude
  lng: -79.1766, // Default longitude
};

const YourComponent = (props) => {
  let {_id}= useParams();
  const [StationName, setStationName] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [marker, setMarker] = useState(props.center);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/stations/getAllStations");
        setStations(response.data.data); // Assuming the data array is under 'data' key
        alert("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const handleDelete = (stationId) => {
    if (window.confirm("Are you sure you want to delete this station?")) {
      axios.delete(`/api/v1/stations/${stationId}`)
        .then(() => {
          setStations(stations.filter((station) => station._id !== stationId));
          alert("Station deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting station:", error);
          alert("Failed to delete station");
        });
    }
  };
  

  const handleEdit = (updatedStation) => {
    axios.put(`/api/v1/stations/update/${updatedStation._id}`, updatedStation)
      .then(() => {
        setStations(stations.map((station) => station._id === updatedStation._id ? updatedStation : station));
        alert("Station updated successfully");
      })
      .catch((error) => {
        console.error("Error updating station:", error);
        alert("Failed to update station");
      });
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStation = { StationName, coordinates, address, description, marker };

    // Validate coordinates before sending
    if (coordinates.length !== 2 || isNaN(coordinates[0]) || isNaN(coordinates[1])) {
        alert("Please enter valid coordinates.");
        return;
    }

    axios.post("/api/v1/stations/pin-station", newStation)
        .then(() => {
            setStations([...stations, newStation]);
            setStationName("");
            setCoordinates([]);
            setAddress("");
            setDescription("");
            setMarker(props.center);
            alert("Station added successfully");
        })
        .catch((error) => {
            console.error("Error adding station:", error);
            alert("Failed to add station");
        });
};


  // const handleMapClick = (event) => {
  //   setMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  // };

  // if (loadError) return <div>Error loading maps</div>;
  // if (!isLoaded) return <div>Loading Maps</div>;

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
    key={station._id}
    station={station}
    onDelete={() => handleDelete(station._id)} 
    onEdit={() => handleEdit(station)}
  />
))}

        </tbody>
      </table>

<<<<<<< HEAD
      <div className="container-add-stations">
        <h2>Add a station</h2>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={StationName}
        onChange={(e) => setStationName(e.target.value)}
        placeholder="Station Name"
        required
      />
      <input
        type="text"
        value={coordinates.join(',')}
        onChange={(e) => {
          const coords = e.target.value.split(',').map(Number);
          setCoordinates(coords);
        }}
        placeholder="Coordinates (e.g., longitude,latitude)"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Station</button>
    </form>
      </div>
=======
       
      </form>

    </div>
    <ResponsiveContainer><FooterAdmin/> </ResponsiveContainer>
        
>>>>>>> 12a47d4e37624fde6045ece61c4f444a83f6d6f4
    </div>
  );
}

export default  YourComponent;
