import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AudiobookDetails = ({ audiobooks }) => {
  const { id } = useParams();
  const audiobook = audiobooks.find(ab => ab._id === id);

  const [reviews, setReviews] = useState(audiobook ? audiobook.reviews : []);
  const [newReview, setNewReview] = useState({
    user: '',
    rating: '',
    comment: ''
  });

  if (!audiobook) {
    return <h2>Audiobook not found</h2>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    setNewReview({ user: '', rating: '', comment: '' });
  };

  return (
    <div className="audiobook-details">
      <h2>{audiobook.title}</h2>
      <p>by {audiobook.author}</p>
      <img src={audiobook.coverImage} alt={audiobook.title} />
      <p>{audiobook.description}</p>
      <p>Genre: {audiobook.genre}</p>
      <p>Rating: {audiobook.rating}</p>

      <div className="reviews">
        <h3>User Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.user}</strong></p>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="review-form">
        <h3>Submit a Review</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="user"
                value={newReview.user}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Rating:
              <input
                type="number"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                required
                min="1"
                max="5"
              />
            </label>
          </div>
          <div>
            <label>
              Comment:
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};



export default AudiobookDetails;
