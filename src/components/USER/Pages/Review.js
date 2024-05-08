import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './StarRating'; // Import the StarRating component

const ReviewApp = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ title: '', body: '', rating: '' });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/v1/reviews/ViewAllreviews');
      setReviews(response.data);
      alert('list of reviews');
    } catch (error) {
      console.error('Error fetching reviews:', error);
      alert('dont sent');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/reviews/Addreview', formData);
      console.log('Review created:', response.data);
      setFormData({ title: '', body: '', rating: '' });
      fetchReviews();
      alert('review added successfully');
    } catch (error) {
      console.error('Error creating review:', error);
      alert('failed to add review');
    }
  };

  return (
    <div>
      <h1>Review App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label><br />
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br />

        <label htmlFor="body">Body:</label><br />
        <textarea id="body" name="body" value={formData.body} onChange={handleChange} required /><br />

        <label htmlFor="rating">Rating:</label><br />
        <input type="number" id="rating" name="rating" min="1" max="5" value={formData.rating} onChange={handleChange} required /><br />

        <button type="submit">Submit Review</button>
      </form>

      <div>
        {reviews.map((review) => (
          <div key={review._id}>
            <h3>{review.title}</h3>
            <p>{review.body}</p>
            <p>
              <StarRating rating={review.rating} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewApp;

