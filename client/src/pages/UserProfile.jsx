import React from 'react';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData, useOutletContext } from 'react-router-dom';
import { useDashboardContext } from './DashboardLayout';

export const loader = async () => {
  try {
    const { data: bets } = await customFetch.get('/bets');
    const { data: user } = await customFetch.get('/users/current-user');
    return { bets, user };
  } catch (error) {
    return redirect('/');
  }
};

// const userFetch = async () => {
//   try {
//     const { data } = await customFetch.get('/users/current-user');
//     return data;
//   } catch (error) {
//     return redirect('/');
//   }

// const { userData } = await customFetch.get('users/current-user');
// const user = userData;
// };
// const user = userFetch();

const UserProfile = () => {
  const { user, bets } = useLoaderData();
  console.log(user);
  console.log(bets);
  return (
    <div className='skeleton align-element p-8'>
      <h1 className='text-5xl text-center font-bold mb-8'>
        User Name: {user.userWithoutPassword.name}
      </h1>
      <h1 className='text-3xl font-bold mb-4'>
        User Location: {user.userWithoutPassword.location}
      </h1>
      <h1 className='text-3xl font-bold mb-4'>
        Total Bets Placed: {bets.totalBets}
      </h1>
      <h1 className='text-3xl font-bold mb-4'>Total Winnings: $0</h1>
    </div>
  );
};

export default UserProfile;
