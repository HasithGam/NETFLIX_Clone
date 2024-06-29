import React from 'react';
import './MovieCards.css';

const Moviecards = ({ imageLink, movieTitle, overview }) => {
  return (
    <div className='movie-card'>
      <img src={imageLink} alt="movie poster" />
      <p>{movieTitle}</p>
      {/* <p className='extra-info'>{overview}</p> */}
    </div>
  );
};

export default Moviecards;
