"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import './Navbar.css';
import { logout as firebaseLogout } from '@/app/firebase';

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await firebaseLogout();
      router.push('/Login');
    } catch (err) {
      console.error("Failed to logout: ", err);
    }
  };

  return (
    <div ref={navRef} className='navbar'>
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
        <img src="/assets/search_icon.svg" alt="search movies" className='icons' />
        <p>Children</p>
        <img src="/assets/bell_icon.svg" alt="notification" className='icons' />
        <div className='navbar-profile'>
          <img src="/assets/profile_img.png" alt="profile" className='profile' />
          <img src="/assets/caret_icon.svg" alt="profile" />
          <div className='dropdown'>
            <ul>
              <li className='settinglist'>Manage Profile</li>
              <li className='settinglist'>Account</li>
              <li className='settinglist'>Help Center</li>
              <hr />
              <li className='settinglist'>
                <p onClick={handleLogout}>Sign Out of Netflix</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
