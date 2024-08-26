import React from 'react';
import '../index.css';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { logoutUser } = useDashboardContext();
  return (
    <div className='sticky top-0 z-10 bg-base-200'>
      <div className='grid grid-cols-12'>
        <div className='grid sm:col-span-2 col-span-5 items-center'>
          <a className='btn btn-ghost text-xl'>BTH</a>
        </div>
        <div className='grid sm:col-span-7 items-center'>
          <div className='hidden sm:grid sm:grid-flow-col'>
            <NavLink
              to='.'
              className='btn btn-ghost uppercase'
            >
              All Games
            </NavLink>
            <NavLink
              to='allbets'
              className='btn btn-ghost uppercase'
            >
              All Bets
            </NavLink>
            <NavLink
              to='profile'
              className='btn btn-ghost uppercase'
            >
              User Profile
            </NavLink>
            <NavLink
              to='leaderboard'
              className='btn btn-ghost uppercase'
            >
              Overall Scoreboard
            </NavLink>
          </div>
        </div>
        <div className='grid sm:col-span-3 col-span-6 items-start'>
          <button
            className='btn btn-ghost text-xl uppercase '
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
