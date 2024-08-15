import React from 'react';

const Bet = ({ _id, betTeam, betSpread, betAmount }) => {
  return (
    <div className='card bg-primary text-primary-content w-48 mb-4'>
      <div className='card-body place-content-center'>
        <header className='card-title'>Bet Slip</header>
        <h2>You bet: {betAmount}</h2>
        <h2>On: {betTeam}</h2>
        <h2>At: {betSpread}</h2>
      </div>
    </div>
  );
};

export default Bet;
