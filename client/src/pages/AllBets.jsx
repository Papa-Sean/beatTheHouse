import React, { createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { BetsContainer, SearchContainer } from '../components';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get('/bets', { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllBetsContext = createContext();

const AllBets = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllBetsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <BetsContainer />
    </AllBetsContext.Provider>
  );
};

export const useAllBetsContext = () => useContext(AllBetsContext);

export default AllBets;
