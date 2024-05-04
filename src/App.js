import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Offers from './pages/Offers';
  import MapComponent from './MapComponent/MapComponent';
// import GasStations from './GasStations/GasStations';
import ContactUs from './pages/ContactUs';
import About from './pages/About'
import Profile from './pages/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//import GasStations from './GasStations/GasStations';

function App() {
  return (
    
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/map" element={<MapComponent />} />
        {/* <Route path="/map" element={<GasStations />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/profile" element={<Profile />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;


