// import React from 'react';
// import './MovieCards.css';

// const Moviecards = ({ imageLink, movieTitle, overview }) => {
//   return (
//     <div className='movie-card'>
//       <img src={imageLink} alt="movie poster" />
//       <p>{movieTitle}</p>
//       {/* <p className='extra-info'>{overview}</p> */}
//     </div>
//   );
// };

// export default Moviecards;


import React, { useState } from 'react';
import './MovieCards.css';
import MoviePopup from '../MoviePopup/MoviePopup';

const Moviecards = ({ imageLink, movieTitle, overview, movieId }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className='movie-card'
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <img src={imageLink} alt="movie poster" />
      <p>{movieTitle}</p>
      {showPopup && <MoviePopup movieId={movieId} />}
    </div>
  );
};

export default Moviecards;

