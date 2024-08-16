import React from 'react';

const Bet = ({ _id, betTeam, betSpread, betAmount }) => {
  return (
    <div className='card bg-warning text-primary-content w-auto mb-4'>
      <div className='card-body place-content-center'>
        <header className='text-center font-extrabold text-5xl mb-4'>
          Bet Slip
        </header>
        <h2 className='text-center font-bold text-2xl'>You bet: {betAmount}</h2>
        <h2 className='text-center font-bold text-2xl'>On: {betTeam}</h2>
        <h2 className='text-center font-bold text-2xl'>At: {betSpread}</h2>
      </div>
    </div>
  );
};

export default Bet;
