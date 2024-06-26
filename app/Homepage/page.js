"use client";
import React from 'react'
import './Homepage.css'
import Navbar from '@/components/Navbar/Navbar'
import Moviecards from '@/components/Moviecards/Moviecards'
import Footer from '@/components/Footer/Footer'

const Homepage = () => {
  return (
    <>
      <div className='homepage'>
        <Navbar/>
        <div className='home-default-movie'>
          <img src="/assets/home-default-movie.jpg" alt="home defauld movie banner" className='banner-img'/>
          <div className="home-banner-caption">
            <img src="/assets/hero_title.png" alt="hero title" className='caption-img'/>
            <p>In the near future when people become uninterested in boxing and similar sports, a new sport is created - Robot boxing wherein robots battle each other while being controlled by someone.</p>
            <div className="home-default-btn">
              <button className='btn'><img src="/assets/play_icon.png" alt="Play Movie" />Play</button>
              <button className='btn dark-btn'><img src="/assets/info_icon.png" alt="infoemation" />More Info</button>
            </div>   
            <Moviecards/>
          </div>
        </div>
      </div>
      <div className="more-movies">
        <Moviecards title={"Blockbuster Movies"}/>
        <Moviecards title={"Only on Netflix"}/>
        <Moviecards title={"Upcomming"}/>
        <Moviecards title={"Today's Top Pics for you"}/>
      </div>
      <Footer/>
    </>
  )
}

export default Homepage
