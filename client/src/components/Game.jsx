import React from 'react';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Form, Link } from 'react-router-dom';
import FormRow from './FormRow';
day.extend(advancedFormat);

const Game = ({
  _id,
  home_team,
  away_team,
  home_spread,
  away_spread,
  commence_time,
  sport_title,
}) => {
  const date = day(commence_time).format('ddd M/D, YYYY');
  return (
    <div className='card bg-warning text-primary-content w-64 mb-4 pb-4'>
      <div className='grid grid-cols-1 justify-items-center'>
        <h1 className='card-title p-4'>{sport_title}</h1>
        <h2 className='card-title p-1'>
          {away_team} {away_spread > 0 && '+'}
          {away_spread}
        </h2>
        <h2 className='card-title'>@</h2>
        <h2 className='card-title p-1'>
          {home_team} {home_spread > 0 && '+'}
          {home_spread}
        </h2>
        <p>{date}</p>

        <div className='card-actions justify-end pt-4'>
          <Link
            to={`../dashboard/addbet/${_id}`}
            className='btn '
          >
            Bet Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
