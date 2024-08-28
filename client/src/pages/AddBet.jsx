import React, { useEffect, useState } from 'react';
import FormRowSelect from '../components/FormRowSelect';
import { useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from 'react-router-dom';
import { BetsContainer, FormRow } from '../components';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/api-games/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await customFetch.post('/bets', data);
    toast.success('Bet added!');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddBet = () => {
  const { game } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [betTeam, setBetTeam] = useState(game.home_team);
  const [betSpread, setBetSpread] = useState(game.home_spread);
  const handleOnChange = () => {
    if (betTeam !== game.away_team) {
      setBetTeam(game.away_team);
      setBetSpread(game.away_spread);
      return null;
    }
    setBetTeam(game.home_team);
    setBetSpread(game.home_spread);
    return null;
  };

  return (
    <container className='grid grid-cols-1 p-8'>
      <Form
        method='post'
        className='bg-base-200 align-element p-6 rounded-2xl'
      >
        <FormRowSelect
          name='gameId'
          labelText='Game ID'
          defaultValue={game.gameId}
          list={[game.gameId]}
        />
        <FormRowSelect
          name='betTeam'
          labelText='bet team'
          defaultValue={game.home_team}
          list={[game.home_team, game.away_team]}
          onChange={handleOnChange}
        />
        <FormRowSelect
          name='betSpread'
          labelText='spread'
          list={[betSpread]}
        />
        <FormRow
          type='number'
          name='betAmount'
          labelText='bet amount'
          defaultValue='100'
        />
        <button
          className='btn btn-warning  btn-block mt-8'
          type='submit'
        >
          Submit Bet
        </button>
      </Form>
    </container>
  );
};

export default AddBet;
