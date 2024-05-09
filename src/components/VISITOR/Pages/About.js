import React from 'react';
import './About.css'; // Import CSS file for styling
import { AiOutlineCar } from 'react-icons/ai';

const AboutUs = () => {
  return (
 

          <div className='about_bg'>
      <div className="about-us-container">
      <h2>About Us</h2>
      <div className="about-us-content">
        <AiOutlineCar className="icon-about" />
        <p>
          Welcome to our car  service! Our objective is to develop an efficient application that assists electric car users in finding the nearest charging stations along their routes, ensuring a seamless and convenient charging experience.  
         



          Purpose
The motivation behind this project stems from the challenges faced by electric car users in locating nearby charging stations and planning their routes effectively. Existing navigation systems often lack accurate and up-to-date information on charging station availability, leading to inconvenience and disruptions during journeys. Our application aims to address these challenges by providing a comprehensive and user-friendly solution for electric car users, enhancing their overall driving experience.
        </p>
      </div>
     </div>
 </div>
  );
};
      
 


export default AboutUs;