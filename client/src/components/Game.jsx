import React from 'react';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Form, Link } from 'react-router-dom';
import FormRow from './FormRow';
day.extend(advancedFormat);

const Game = ({
  _id,
  homeTeam,
  awayTeam,
  homeSpread,
  awaySpread,
  homeOdds,
  awayOdds,
  createdAt,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <div className='card bg-warning text-primary-content w-64 mb-4 pb-4'>
      <div className='grid grid-cols-1 justify-items-center'>
        <h2 className='card-title p-4'>
          {awayTeam} {awaySpread > 0 && '+'}
          {awaySpread} @ {homeTeam} {homeSpread > 0 && '+'}
          {homeSpread}
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
