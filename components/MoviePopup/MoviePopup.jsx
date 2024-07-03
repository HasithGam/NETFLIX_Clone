import React, { useEffect, useState } from 'react';
import './MoviePopup.css';

const MoviePopup = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then(response => response.json())
      .then(json => setMovie(json));
  }, [movieId]);

  useEffect(() => {
    if (movie && movie.overview) {
      const paragraph = document.getElementById('limit-info');
      const maxLength = 100;

      if (paragraph && paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.substring(0, maxLength) + '...';
      }
    }
  }, [movie]);

  return (
    <div>
      {movie ? (
        <div className='movie-popup'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie poster" />
          <div className='popup-info'>
            <h3>{movie.original_title}</h3>
            <p id='limit-info'>{movie.overview}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePopup;
