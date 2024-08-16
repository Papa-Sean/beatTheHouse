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
import { FormRow } from '../components';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/games/${params.id}`);
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
  const [betTeam, setBetTeam] = useState(game.homeTeam);
  const [betSpread, setBetSpread] = useState(game.homeSpread);
  const handleOnChange = () => {
    if (betTeam !== game.awayTeam) {
      setBetTeam(game.awayTeam);
      setBetSpread(game.awaySpread);
      return null;
    }
    setBetTeam(game.homeTeam);
    setBetSpread(game.homeSpread);
    return null;
  };

  return (
    <Form
      method='post'
      className='bg-base-200 align-element p-6 rounded-2xl'
    >
      <FormRowSelect
        name='betTeam'
        labelText='bet team'
        defaultValue={game.homeTeam}
        list={[game.homeTeam, game.awayTeam]}
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
  );
};

export default AddBet;
