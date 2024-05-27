import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './EiditProfile.css'; // import CSS file for styling
import axios from 'axios';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: ''
  });

  const [message, setMessage] = useState('');

  const carTypes = ['Audi e-tron 55 quattro', 'Audie-tron 50', 'Audi e-tron S quattro', 'Audi e-tron Sportbackonvertible 50 quattro', 'Audi e-tron Sportback 55 quattro', 'Audi e-tron Sportback S quattro', 'BMW i3', 'BMW i3s', 'BMW iX3', ' DS DS3 Crossback e-tense','Honda e','Honda e Advance','Hyundai Ioniq electric','Hyundai Kona electric 39.2kWh,39.2','Hyundai Kona electric 64kWh','Jaguar I-Pace','Kia e-Niro 39.2kWh','Kia e-Niro 64kWh','Kia e-Soul 39.2kWh','Kia e-Soul 64kWh','Mazda MX-30','Mercedes-Benz EQC','Mini Cooper SE','Nissan Leaf','Nissan Leaf e+','Opel Corsa-e','Opel Mokka-e','Peugeot,e-208',',Porsche Taycan 4S (Performance)','Porsche Taycan 4S (Performance Plus)','orsche Taycan Turbo','Porsche Taycan Turbo S','Renault Zoe R110','Renault Zoe R135','Skoda Citigo-e iV','Smart fortwo EQ','Smart forfour EQ','Volkswagen e-up!','Volkswagen ID.3 Pro Performance','Volkswagen ID.3 Pro S','Volkswagen ID.4 1st','Citroen Citroen-Spacetourer (M)'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('User not authenticated');
        return;
      }

      const updatedUserData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        carType: formData.carType
      };

      await axios.put('/api/v1/users/updateMe', updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('Your profile has been successfully updated!');
    } catch (error) {
      console.error('Error updating user profile:', error);
      setMessage('Failed to update your profile.');
    }
  };

  return (
    <div className="custom-background">
      <div>
        <div className="edit-profile-container">
          <h2>Edit Profile</h2>
          {message && <div className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</div>}
          <div>
            <div className="form-group">
              <label>
                <AiOutlineUser className="icon" />
                Name:
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>
                <AiOutlineMail className="icon" />
                Email:
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>
                <AiOutlinePhone className="icon" />
                Phone:
              </label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>
                <BsFillCaretDownFill className="icon" />
                Car Type:
              </label>
              <select className="car-type-select" name="carType" value={formData.carType} onChange={handleChange}>
                <option value="">Select Car Type</option>
                {carTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="button-container">
              <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;