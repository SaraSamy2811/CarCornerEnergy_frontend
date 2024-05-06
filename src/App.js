import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/VISITOR/Pages/Home';
import Register from './components/VISITOR/Pages/Register';
import Login from './components/VISITOR/Pages/Login';
import Offers from './components/USER/Pages/Offers';
import MapComponent from './components/USER/MapComponent/MapComponent';
import HomeForUser from './components/USER/Pages/HomeForUser';
import ContactUs from './components/VISITOR/Pages/ContactUs';
//import About from './pages/About'
import Profile from './components/USER/Pages/Profile';
import EnergyConsumptionPrediction from '../src/REG.MODEL/EnergyConsumptionPrediction'
import VisitorInterface from './components/VISITOR/VisitorInterface';
import UserInterface from './components/USER/UserInterface';

import AdminInterface from './components/ADMIN/AdminInterface'
import Review from './components/USER/Pages/Review';
import ForgotPassword from './components/VISITOR/Pages/ForgotPassword';


function App() {
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<VisitorInterface/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />

          </Route>

          <Route path="/user"  element={<UserInterface/>}>
            <Route index element={<HomeForUser/>}/>
            <Route path="/user/offers" element={<Offers />} />
            <Route path="/user/map" element={<MapComponent />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/EnergyConsumptionPrediction" element={<EnergyConsumptionPrediction />} />
            <Route path="/user/review" element={<Review />} /> 
          </Route>

          <Route element={<AdminInterface/>}>
            {/* Add admin routes here if needed */}
          </Route>
        </Routes>
    
    </div>
  );
}


export default App;




