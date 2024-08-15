import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <section className='align-element flex-auto'>
      <section className=''>
        <Outlet />
      </section>
    </section>
  );
};

export default HomeLayout;
