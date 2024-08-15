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
    <div className='card bg-primary text-primary-content w-96 mb-4'>
      <div className='card-body place-content-center'>
        <h2 className='card-title'>
          {awayTeam} {awaySpread > 0 && '+'}
          {awaySpread} @ {homeTeam} {homeSpread > 0 && '+'}
          {homeSpread}
        </h2>
        <p>{date}</p>

        <div className='card-actions justify-end pt-4'>
          <Link
            to={`../dashboard/addbet/${_id}`}
            className='btn btn-warning'
          >
            Bet Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
