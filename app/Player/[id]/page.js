"use client";
import React, { useEffect, useState } from 'react';
import '../Player.css';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';

const Player = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { id } = useParams();
    const path = usePathname();
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/Login');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const getMovieDetails = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ccd4078b314e64c52e5fb9c409042e78`)
            .then(response => response.json())
            .then(json => {
                if (json.success === false) {
                    console.error("Error fetching movie details:", json.status_message);
                } else {
                    setMovieDetails(json);
                }
            })
            .catch(error => console.error("Network error:", error));
    };

    useEffect(() => {
        getMovieDetails();
    }, [id]);

    return (
        <>
            <div className='player'>
                <Link href="/" >{path.startsWith("/login") ? "active" : null}
                    <img src="/assets/back_arrow_icon.png" alt="Go back" className='back-icon' />
                </Link>
                <div className='player-info'>
                    {movieDetails ? (
                        <>
                            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="movie poster" className='movie-poster' />
                            <p>
                                <span style={{ color: "#00e95bbf", fontWeight: "600", marginRight: "10px" }}>{movieDetails.vote_average.toFixed(1)} %Match</span>
                                <span style={{ fontWeight: "300", marginRight: "10px" }}>{movieDetails.release_date}</span>
                                <span style={{ fontWeight: "500", marginRight: "10px" }}>{movieDetails.runtime}m</span>
                            </p>
                            <p>{movieDetails.original_title}</p>
                            <p>{movieDetails.overview}</p>
                        </>
                    ) : (
                        <p>Loading...</p> // Optional: you can show a loading message or spinner here
                    )}
                </div>
            </div>
        </>
    );
};

export default Player;
