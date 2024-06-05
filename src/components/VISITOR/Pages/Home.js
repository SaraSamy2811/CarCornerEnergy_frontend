import React from 'react';
import VideoBackground from '../../videobackground/VideoBackground.js';
import '../css/Home.css';
import CarPhoto from '../../../assests/imges/eren-goldman-mfqj3ZSs_h0-unsplash-removebg-preview.png';


function Home() {
    return (
        <div>
            <VideoBackground showButtons={true} />
            <div className="home-section">
                <div className="home-container">
                    <div className="home-text">
                        <h2>Welcome to Car-Corner Energy</h2>
                        <p className='home_p'>Discover the future of sustainable transportation with Car-Corner Energy. Our comprehensive website empowers electric car owners to easily locate the nearest charging stations, access real-time pricing, and take advantage of exclusive offers.</p>
                    </div>
                    <div className="home-photo"style={{marginLeft:'200px'}}>
                        <img src={CarPhoto}  alt="Electric Car Charging at Car-Corner Energy" />
                    </div>
                </div>
                <div className="additional-section">
                    <div className="left-text">
                        <h3>Services :</h3>
                    </div>
                    <div className="right-boxes">
                        {/* Add your three boxes here */}
                        <div className="box">
                            <p>Detecting the Nearest Electric Charging Station</p>
                        </div>
                        <div className="box">
                            <p>Exclusive Charging Offers and Discounts</p>
                        </div>
                        <div className="box">
                            <p>Integrated AI-Powered Consumption Prediction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
