import React from 'react';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const LeaderBoard = () => {
  const { userWithoutPassword } = useLoaderData();
  console.log(userWithoutPassword);
  return <div>LeaderBoard</div>;
};

export default LeaderBoard;
