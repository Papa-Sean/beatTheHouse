import React from 'react';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const LeaderBoard = () => {
  const { users } = useLoaderData();
  console.log(users);
  return (
    <main className='grid grid-cols-1 p-16'>
      <table className='border-collapse border border-black ... bg-base-200'>
        <thead>
          <tr>
            <th className='border border-slate-600 ... py-2 px-1'>Name</th>
            <th className='border border-slate-600 ... py-2 px-1'>City</th>
            <th className='border border-slate-600 ... py-2 px-1'># Bets</th>
            <th className='border border-slate-600 ... py-2 px-1'>Total</th>
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
                <td className='border border-slate-700 ... text-center py-2'>
                  0
                </td>
                <td className='border border-slate-700 ... text-center font-bold py-2'>
                  $0
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
