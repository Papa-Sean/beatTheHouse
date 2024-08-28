import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
// import betAPICustomFetch from '../utils/betAPICustomFetch';
import APIGamesContainer from '../components/APIGamesContainer';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const { data } = await betAPICustomFetch.get();
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post('/api-games', data);
    toast.success('API Game Added!');
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const GetAPIGamesContext = createContext();

const GetAPIGames = () => {
  const { data } = useLoaderData();
  return (
    <GetAPIGamesContext.Provider value={{ data }}>
      {/* <SearchContainer /> */}
      <APIGamesContainer />
    </GetAPIGamesContext.Provider>
  );
};

export const useGetAPIGamesContext = () => useContext(GetAPIGamesContext);

export default GetAPIGames;
