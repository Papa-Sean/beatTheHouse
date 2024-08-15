import React from 'react';
import Bet from './Bet';
import { useAllBetsContext } from '../pages/AllBets';

const BetsContainer = () => {
  const { data } = useAllBetsContext();
  const { bets } = data;
  if (bets.length === 0) {
    return <div>No bets...</div>;
  }
  return (
    <section className='grid'>
      <h5>{bets.length} bets placed:</h5>
      <div className='grid grid-cols-3 grid-flow'>
        {bets.map((bet) => {
          return (
            <Bet
              key={bet._id}
              {...bet}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BetsContainer;
