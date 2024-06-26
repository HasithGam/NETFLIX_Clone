"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import './Navbar.css'

const Navbar = () => {
  const path = usePathname();

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src="/assets/logo.png" alt="NETFLIX Logo" />
        <ul className='nav-left-menu'>
          <li><Link href="/">Home</Link></li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src="/assets/search_icon.svg" alt="search movies" className='icons'/>
        <p>Children</p>
        <img src="/assets/bell_icon.svg" alt="notification" className='icons'/>
        <div className='navbar-profile'>
          <img src="/assets/profile_img.png" alt="profile" className='profile'/>
          <img src="/assets/caret_icon.svg" alt="profile" />
          <div className='dropdown'>
            <ul>
              <li className='settinglist'>Manage Profile</li>
              <li className='settinglist'>Account</li>
              <li className='settinglist'>Help Center</li>
              <hr/>
              <li className='settinglist'>
                <Link href="/Login" >{path.startsWith("/login") ? "active" : null}
                    Sign Out of Netflix
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
