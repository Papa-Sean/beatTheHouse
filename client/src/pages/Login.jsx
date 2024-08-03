import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content items-center flex-col lg:flex-row-reverse'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <Link
                    to='/register'
                    className='label-text-alt link link-hover'
                  >
                    Not a member? Register here!
                  </Link>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-warning'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
