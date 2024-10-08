import React from 'react';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data: bets } = await customFetch.get('/bets');
    const { data: user } = await customFetch.get('/users/current-user');
    return { bets, user };
  } catch (error) {
    return redirect('/');
  }
};

const UserProfile = () => {
  const { user, bets } = useLoaderData();
  console.log(user);
  console.log(bets);
  return (
    <section className='p-16'>
      <div className='skeleton align-element p-8'>
        <section className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <h1 className='sm:text-5xl sm:text-center text-3xl text-left font-bold mb-4'>
            User Name:
          </h1>
          <h1 className='sm:text-5xl sm:text-center text-3xl text-left font-bold mb-4'>
            {user.userWithoutPassword.name}
          </h1>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4'>
            User Location:
          </h1>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-center'>
            {user.userWithoutPassword.location}
          </h1>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4'>Total Bets:</h1>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-center'>
            {bets.totalBets}
          </h1>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4'>
            Total Winnings:{' '}
          </h1>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-center'>
            {' '}
            Units: 0
          </h1>
        </section>
      </div>
    </section>
  );
};

export default UserProfile;
