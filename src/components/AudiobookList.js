import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AudiobookList = ({ audiobooks }) => {
  const [filter, setFilter] = useState({
    genre: '',
    author: '',
    rating: ''
  });

  const handleFilterChange = (e) => {
    const { name, value, type } = e.target;
    setFilter(prev => ({
      ...prev,
      [type === "radio" ? "rating" : name]: value
    }));
  };


  const filteredAudiobooks = audiobooks.filter(audiobook => {
    const genreMatch = !filter.genre || audiobook.genre.toLowerCase() === filter.genre.toLowerCase();
    const authorMatch = !filter.author || audiobook.author.toLowerCase() === filter.author.toLowerCase();
    const ratingMatch = !filter.rating || String(audiobook.rating) === filter.rating;
    return genreMatch && authorMatch && ratingMatch;  // Only show books that match all filters
  });

  return (
    <div className="audiobook-container">
      <div className="filter-box">
        <h3>Filters</h3>
        <label>
          Genre:
          <input type="text" name="genre" value={filter.genre} onChange={handleFilterChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={filter.author} onChange={handleFilterChange} />
        </label>
        <div>
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map(rating => (
            <label key={rating}>
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={String(filter.rating) === String(rating)}
                onChange={handleFilterChange}
              />
              <span>{rating} Stars</span>
            </label>
          ))}
        </div>
      </div>
      <div className="audiobook-list">
        {filteredAudiobooks.length > 0 ? filteredAudiobooks.map(audiobook => (
          <div key={audiobook._id} className="audiobook-item">
            <h2>{audiobook.title}</h2>
            <p>by {audiobook.author}</p>
            <Link to={`/audiobooks/${audiobook._id}`}>
              <img src={audiobook.coverImage} alt={audiobook.title} />
            </Link>
          </div>
        )) : <p>No audiobooks found that match your criteria.</p>}
      </div>
    </div>
  );
};

export default AudiobookList;
