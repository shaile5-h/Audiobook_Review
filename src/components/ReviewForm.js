import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ audiobookId }) {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/audiobooks/${audiobookId}/reviews`, {
      user, rating, comment
    }).then(response => {
      console.log(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={e => setRating(e.target.value)}
      />
      <textarea
        placeholder="Your review"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
