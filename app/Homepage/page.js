"use client";
import React from 'react'
import './homepage.css'
import Navbar from '@/components/Navbar/Navbar'
import Movielist from '@/components/Movielist/Movielist'
import Footer from '@/components/Footer/Footer'

const Homepage = () => {
  return (
    <>
      <div className='homepage'>
        <Navbar />
        <div className='home-default-movie'>
          <img src="/assets/home-default-movie.jpg" alt="home defauld movie banner" className='banner-img' />
          <div className="home-banner-caption">
            <img src="/assets/hero_title.png" alt="hero title" className='caption-img' />
            <p>In the near future when people become uninterested in boxing and similar sports, a new sport is created - Robot boxing wherein robots battle each other while being controlled by someone.</p>
            <div className="home-default-btn">
              <button className='btn'><img src="/assets/play_icon.png" alt="Play Movie" />Play</button>
              <button className='btn dark-btn'><img src="/assets/info_icon.png" alt="infoemation" />More Info</button>
            </div>
            <div className='banner-mivielist'>
              <Movielist />
            </div>

          </div>
        </div>
      </div>
      <div className="more-movies">
        <Movielist title={"Blockbuster Movies"} category={"top_rated"} />
        <Movielist title={"Only on Netflix"} category={"popular"} />
        <Movielist title={"Upcomming"} category={"upcoming"} />
        <Movielist title={"Today's Top Pics for you"} category={"now_playing"} />
      </div>
      <Footer />
    </>
  )
}

export default Homepage
