import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './EiditProfile.css'; // import CSS file for styling
import axios from 'axios';




const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    make: '',
    model: ''
  });

  const [message, setMessage] = useState('');

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
        make: formData.make,
        model: formData.model
      };

      const response = await axios.put('/api/v1/users/updateMe', updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setMessage('Your profile has been successfully updated!');
    } catch (error) {
      setMessage('Failed to update your profile.');
    }
  };

  return (
    <div className="custom-background">
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
            <label>Make:</label>
            <input type="text" name="make" value={formData.make} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Model:</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} />
          </div>
          <div className="button-container">
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
