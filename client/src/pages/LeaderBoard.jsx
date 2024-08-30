import React from 'react';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/admin/app-stats');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const LeaderBoard = () => {
  const { usersWithGames: users, betsData } = useLoaderData();
  console.log(betsData);
  return (
    <main className='grid grid-cols-1 p-16'>
      <table className='border-collapse border border-black ... bg-base-200'>
        <thead>
          <tr>
            <th className='border border-slate-600 ... py-2 px-1'>Name</th>
            <th className='border border-slate-600 ... py-2 px-1'>City</th>
            <th className='border border-slate-600 ... py-2 px-1'># Bets</th>
            <th className='border border-slate-600 ... py-2 px-1'>Winnings</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td className='border border-slate-700 ... text-center py-2'>
                  {user.name}
                </td>
                <td className='border border-slate-700 ... text-center py-2'>
                  {user.location}
                </td>
                <td className='border font-extrabold border-slate-700 ... text-center py-2'>
                  {betsData.map((bet) => {
                    if (bet.createdBy === user._id) {
                      return bet.bets;
                    }
                  })}
                </td>
                <td className='border border-slate-700 ... text-center font-bold py-2'>
                  $ 0
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default LeaderBoard;
