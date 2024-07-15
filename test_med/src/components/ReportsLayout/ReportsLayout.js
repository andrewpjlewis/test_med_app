import React, { useState, useEffect, useRef } from 'react';
import './ReportsLayout.css';

const StarRating = ({ rating, setRating }) => {
  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ReportsLyout = ({ doctorName, doctorSpeciality, appointmentId, onReviewSubmit }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const formRef = useRef(null);

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, appointmentId, review, rating };
    setReviews([...reviews, newReview]);
    onReviewSubmit(newReview);
    setName('');
    setReview('');
    setRating(0);
    setIsFormVisible(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormVisible]);

  return (
    <div className="review-form-container">
      <h2>Reviews</h2>
      <div className="review-form-header">
        <h3>Serial Number</h3>
        <h3>Doctor Name:</h3>
        <h3>Doctor Specialty:</h3>
        <h3>Provide Feedback</h3>
        <h3>Review Given</h3>
      </div>
      <div className="review-form-details">
        <p>{appointmentId}</p>
        <p>{doctorName}</p>
        <p>{doctorSpeciality}</p>
        <p><button onClick={handleButtonClick}>Click Here</button></p>
        <div className="reviews">
          {reviews.map((r, index) => (
            <div key={index} className="review">
              <p><strong>Name:</strong> {r.name}</p>
              <p><strong>Review:</strong> {r.review}</p>
              <p><strong>Rating:</strong> {[...Array(r.rating)].map((_, i) => '★').join('')}</p>
            </div>
          ))}
        </div>
      </div>

      {isFormVisible && (
        <form onSubmit={handleFormSubmit} className="review-form" ref={formRef}>
          <div className="form-group">
            <h2>Give Your Review</h2>
            <label htmlFor="name">Name:</label>
            <textarea
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
            <label htmlFor="rating">Rating:</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
};

export default ReportsLyout;
