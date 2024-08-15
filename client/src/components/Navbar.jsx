import React from 'react';
import '../index.css';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { logoutUser } = useDashboardContext();
  return (
    <div className='navbar bg-base-200'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>BTH</a>
      </div>
      <div className='py-2 ml-11 flex-grow md:visible lg:visible '>
        <NavLink
          to='.'
          className='btn btn-sm btn-warning mx-2'
        >
          All Games
        </NavLink>
        <NavLink
          to='allbets'
          className='btn btn-sm btn-warning mx-2'
        >
          All Bets
        </NavLink>
        <NavLink
          to='profile'
          className='btn btn-sm btn-warning mx-2'
        >
          User Profile
        </NavLink>
        <NavLink className='btn btn-sm btn-warning mx-2'>
          Overall Scoreboard
        </NavLink>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary>Logout</summary>
              <ul className='bg-base-100 rounded-t-none p-2'>
                <li>
                  <button
                    className='btn btn-warning'
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
