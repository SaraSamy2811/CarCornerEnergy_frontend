import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/VISITOR/Pages/Home';
import Register from './components/VISITOR/Pages/Register';
import Login from './components/VISITOR/Pages/Login';
import Offers from './components/USER/Pages/Offers';
import MapComponent from './components/USER/MapComponent/MapComponent';
import HomeForUser from './components/USER/Pages/HomeForUser';
// import GasStations from './GasStations/GasStations';
import ContactUs from './components/VISITOR/Pages/ContactUs';
//import About from './pages/About'
import Profile from './components/USER/Pages/Profile';
//import Header from './components/header/Header';
//import Footer from './components/footer/Footer';
import EnergyConsumptionPrediction from '../src/REG.MODEL/EnergyConsumptionPrediction'
import VisitorInterface from './components/VISITOR/VisitorInterface';
import UserInterface from './components/USER/UserInterface';
import AdminInterface from './components/ADMIN/AdminInterface'
//import GasStations from './GasStations/GasStations';

function App() {
  return (
    
    <div>
  
    <BrowserRouter>
    <Routes>

      <Route path='/'element={<VisitorInterface/>}>
      <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
            

      <Route path='/'element={<UserInterface/>}>
        <Route index element={<HomeForUser/>}/>
        <Route path="/offers" element={<Offers />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/EnergyConsumptionPrediction" element={<EnergyConsumptionPrediction />} /> 
      </Route>


      <Route path='/'element={<AdminInterface/>}>

      </Route>
        

      </Routes>
      </BrowserRouter>
    
      </div>
    
  );
}

export default App;




