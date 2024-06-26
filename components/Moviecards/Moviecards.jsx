"use client";
import React, { useEffect, useRef, useState } from 'react'
import './MovieCards.css'

const Moviecards = ({title,category}) => {
  const [movieList, setMovieList] = useState([]);
  
  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=ccd4078b314e64c52e5fb9c409042e78")
      .then(response => response.json())
      .then(json => setMovieList(json.results));
  };
  console.log(movieList);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    getMovie();
    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handleWheel);
    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <div className='movie-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="movie-list" ref={cardsRef}>
          {
            movieList.map((movie) => (
              <div className='movie' key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie poster" />
                <p>{movie.original_title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Moviecards;
