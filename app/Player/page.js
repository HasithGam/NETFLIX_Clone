"use client"
import React from 'react'
import './Player.css'

const Player = () => {
  return (
    <div className='player'>
      <img src="/assets/back_arrow_icon.png" alt="Go back" />
      <iframe width="90%" height="90%" src="https://www.youtube.com/embed/IvLl2S2qH1E" title='trailer' frameBorder="0" allowFullScreen></iframe>
      <div className='player-info'>
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
