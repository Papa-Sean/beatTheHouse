import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className='align-element py-10'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
