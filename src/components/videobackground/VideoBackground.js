
import React from 'react';
import "./VideoBackground.css"
import car from "..//..//assests/videos/background.mp4"
import Buttons from '../Buttons';

const VideoBackground = () => {
  
  return (
    <div className='background'>
      <div className='overlay'> </div>
      <video src={car} autoPlay loop muted />
        <div className='content'>
        <h1> For all your electric car charging needs </h1>
        <Buttons/>
        </div>
    </div>

  );
}

export default VideoBackground;
