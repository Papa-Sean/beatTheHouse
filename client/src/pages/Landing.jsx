import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Beat The House</h1>
          <p className='py-6 text-justify'>
            Ever wonder what it's like to be a bookie? Ever wanted to see if you
            could beat the house? Tired of hearing how great your buddies are at
            sports betting and don't want to play regular old fantasy football?
            Gather together at Beat the House and have some fun without losing
            your next paycheck!
          </p>
          <Link
            to='/login'
            className='btn btn-warning font-bold uppercase'
          >
            Login/Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
