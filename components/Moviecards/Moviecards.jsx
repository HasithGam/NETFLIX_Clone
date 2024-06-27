"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './MovieCards.css';

const Moviecards = ({ title, category }) => {
  const [movieList, setMovieList] = useState([]);
  
  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?api_key=ccd4078b314e64c52e5fb9c409042e78`)
      .then(response => response.json())
      .then(json => setMovieList(json.results));
  };

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
    <div className='movie-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="movie-list" ref={cardsRef}>
        {movieList && movieList.length > 0 ? (
          movieList.map((movie) => (
            <Link href={`/Player/${movie.id}`} className='movie' key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie poster" />
              <p>{movie.original_title}</p>
            </Link>
          ))
        ) : (
          <p>Loading...</p> // Optional: you can show a loading message or spinner here
        )}
      </div>
    </div>
  );
}

export default Moviecards;
