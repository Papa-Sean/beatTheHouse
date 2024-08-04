import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
  return (
    <section className='align-element py-10'>
      <Navbar />
      <section className='align-element py-10'>
        <Outlet />
      </section>
    </section>
  );
};

export default HomeLayout;
