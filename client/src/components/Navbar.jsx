import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logging Out...');
  };
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>BTH</a>
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
