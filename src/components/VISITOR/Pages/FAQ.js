import React, { useState } from 'react';
import './FAQ.CSS';

const Freqasked = () => {

  const [showAnswer, setShowAnswer] = useState(new Array(8).fill(false));

  const toggleAnswer = (index) => {
    const updatedShowAnswer = showAnswer.map((item, i) => 
      i === index ? !item : item
    );
    setShowAnswer(updatedShowAnswer);
  };

  return (
    <div className="faq-section" style={{ marginTop: '20%', marginBottom: '20px' }}>
   

<div class="faq-section">
<h1>Frequently Asked Questions</h1>
    <div className="faq-container">
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(0)}>
          How accurate is the information about charging stations' availability and status?
          {showAnswer[0] ? '▼' : '►'}
        </div>
        {showAnswer[0] && (
          <div className="faq-answer">
            Our app strives to provide real-time updates on charging station availability and status. However, factors such as network connectivity and station-specific reporting can affect the accuracy of this information. We encourage users to check for updates and verify information whenever possible.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(1)}>
          Can I reserve a charging spot through the app?
          {showAnswer[1] ? '▼' : '►'}
        </div>
        {showAnswer[1] && (
          <div className="faq-answer">
            While some charging networks may offer reservation features through their own platforms, our app primarily focuses on providing information about charging station locations, availability, and related details. We recommend checking with specific charging networks or stations for reservation options.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(2)}>
        Are there plans to integrate payment options within the app for seamless charging experiences?  
        {showAnswer[2] ? '▼' : '►'}
        </div>
        {showAnswer[2] && (
          <div className="faq-answer">
We are continuously exploring ways to enhance the user experience, including integrating payment options for charging sessions directly within the app. Stay tuned for updates on new features and developments.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(3)}>
        Does the app provide information about charger compatibility with my EV model?       
        {showAnswer[3] ? '▼' : '►'}

         </div>
        {showAnswer[3] && (
          <div className="faq-answer">
Yes, our app includes details about charger compatibility, such as connector types (CHAdeMO, CCS, Tesla, etc.) and charging speeds (Level 1, Level 2, DC fast), helping you find stations suitable for your EV model.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(4)}>
        Can I leave reviews or feedback about charging stations on the app?       
        {showAnswer[4] ? '▼' : '►'}
         </div>
        {showAnswer[4] && (
          <div className="faq-answer">
We value user feedback and may incorporate features for leaving reviews or providing feedback about charging stations in future updates. Your input helps us improve the app and enhance the overall user experience.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(5)}>
        Is there a feature to track my charging history or monitor charging sessions through the app?        
        {showAnswer[5] ? '▼' : '►'}
        </div>
        {showAnswer[5] && (
          <div className="faq-answer">
While tracking charging history or monitoring sessions is not currently a feature of the app, we are considering such functionalities for future releases to provide users with more comprehensive tools for managing their EV charging experiences.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(6)}>
        Does the app offer notifications or alerts for nearby charging stations or when my EV is fully charged?        
        {showAnswer[6] ? '▼' : '►'}
</div>
        {showAnswer[6] && (
          <div className="faq-answer">
We are working on implementing notification features to alert users about nearby charging stations, low battery levels, and when their EVs are fully charged. These features aim to improve convenience and help users stay informed during their journeys.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleAnswer(7)}>
          Can I customize preferences such as preferred charging networks or station amenities in the app?
          {showAnswer[7] ? '▼' : '►'}
        </div>
        {showAnswer[7] && (
          <div className="faq-answer">
            Yes, the app allows users to customize preferences, including preferred charging networks, station amenities (like restrooms or shops), and other criteria to tailor the search results to their specific needs and preferences.
          </div>
        )}
      </div>
    </div>
    </div>
    </div>

  );
};

export default Freqasked;