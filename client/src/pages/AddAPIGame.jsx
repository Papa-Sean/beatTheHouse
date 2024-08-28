import React from 'react';
import { FormRowSelect } from '../components';
import { useOutletContext } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

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

const gamesData = [
  {
    id: '612c2c3f6ca9e10d4b7ead21a2b0ff38',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2024-09-06T00:20:00Z',
    home_team: 'Kansas City Chiefs',
    away_team: 'Baltimore Ravens',
    bookmakers: [
      {
        key: 'betmgm',
        title: 'BetMGM',
        last_update: '2024-08-27T15:27:45Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-08-27T15:27:44Z',
            outcomes: [
              {
                name: 'Baltimore Ravens',
                price: 130,
              },
              {
                name: 'Kansas City Chiefs',
                price: -155,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-08-27T15:27:44Z',
            outcomes: [
              {
                name: 'Baltimore Ravens',
                price: -115,
                point: 3,
              },
              {
                name: 'Kansas City Chiefs',
                price: -105,
                point: -3,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-08-27T15:27:44Z',
            outcomes: [
              {
                name: 'Over',
                price: -110,
                point: 46.5,
              },
              {
                name: 'Under',
                price: -110,
                point: 46.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eca3b71919531e7ae0b4f3f501157e6c',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2024-09-07T00:20:00Z',
    home_team: 'Philadelphia Eagles',
    away_team: 'Green Bay Packers',
    bookmakers: [
      {
        key: 'betmgm',
        title: 'BetMGM',
        last_update: '2024-08-27T15:27:45Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-08-27T15:27:44Z',
            outcomes: [
              {
                name: 'Green Bay Packers',
                price: 130,
              },
              {
                name: 'Philadelphia Eagles',
                price: -155,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-08-27T15:27:44Z',
            outcomes: [
              {
                name: 'Green Bay Packers',
                price: 100,
                point: 2.5,
              },
              {
                name: 'Philadelphia Eagles',
                price: -120,
                point: -2.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-08-27T15:27:44Z',
            outcomes: [
              {
                name: 'Over',
                price: -110,
                point: 48.5,
              },
              {
                name: 'Under',
                price: -110,
                point: 48.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '7a5e353202d40a844491fa5753bc3097',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2024-09-08T17:00:00Z',
    home_team: 'Buffalo Bills',
    away_team: 'Arizona Cardinals',
    bookmakers: [
      {
        key: 'betmgm',
        title: 'BetMGM',
        last_update: '2024-08-27T15:27:45Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-08-27T15:27:45Z',
            outcomes: [
              {
                name: 'Arizona Cardinals',
                price: 220,
              },
              {
                name: 'Buffalo Bills',
                price: -275,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-08-27T15:27:45Z',
            outcomes: [
              {
                name: 'Arizona Cardinals',
                price: -110,
                point: 6,
              },
              {
                name: 'Buffalo Bills',
                price: -110,
                point: -6,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-08-27T15:27:45Z',
            outcomes: [
              {
                name: 'Over',
                price: -110,
                point: 48,
              },
              {
                name: 'Under',
                price: -110,
                point: 48,
              },
            ],
          },
        ],
      },
    ],
  },
];
const AddAPIGame = () => {
  const games = gamesData;

  return (
    <div key='game'>
      {games.map((game) => {
        const gameId = game.id;
        const sport_title = game.sport_title;
        const commence_time = game.commence_time;
        const home_team = game.home_team;
        const away_team = game.away_team;
        const home_spread = game.bookmakers[0]?.markets[1]?.outcomes[0]?.point;
        const away_spread = game.bookmakers[0]?.markets[1]?.outcomes[1]?.point;

        return (
          <Form
            method='post'
            className='grid grid-cols-3 gap-4 p-8'
            key={gameId}
          >
            <FormRowSelect
              name='gameId'
              defaultValue={gameId}
              list={[gameId]}
            />
            <FormRowSelect
              name='sport_title'
              defaultValue={sport_title}
              list={[sport_title]}
            />
            <FormRowSelect
              name='commence_time'
              defaultValue={commence_time}
              list={[commence_time]}
            />
            <FormRowSelect
              name='home_team'
              defaultValue={home_team}
              list={[home_team]}
            />
            <FormRowSelect
              name='away_team'
              defaultValue={away_team}
              list={[away_team]}
            />
            <FormRowSelect
              name='home_spread'
              defaultValue={home_spread}
              list={[home_spread]}
            />
            <FormRowSelect
              name='away_spread'
              defaultValue={away_spread}
              list={[away_spread]}
            />

            <button type='submit'>Create Game</button>
          </Form>
        );
      })}
    </div>
  );
};

export default AddAPIGame;
