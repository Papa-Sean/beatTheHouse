import React, { createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import { SearchContainer, GamesContainer } from '../components';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/games');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllGamesContext = createContext();

const AllGames = () => {
  const { data } = useLoaderData();
  return (
    <AllGamesContext.Provider value={{ data }}>
      <SearchContainer />
      <GamesContainer />
    </AllGamesContext.Provider>
  );
};

export const useAllGamesContext = () => useContext(AllGamesContext);

export default AllGames;
