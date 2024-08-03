import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <div className='align-element'>
      <div className='navbar bg-base-200 align-element'>
        <div className='navbar-start'>
          <Link
            to='/'
            className='btn btn-ghost text-xl'
          >
            BTH
          </Link>
        </div>
        <div className='navbar-center'>
          <Link
            to='/dashboard'
            className='btn btn-ghost text-xl'
          >
            Dashboard
          </Link>
        </div>
        <div className='navbar-end'>
          <Link
            to='/userprofile'
            className='btn btn-ghost text-xl'
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
