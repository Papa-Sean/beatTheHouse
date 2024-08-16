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
    <section>
      <h5 className='text-center'>{bets.length} bets placed:</h5>
      <div className='grid md:grid-cols-3 gap-2 sm:grid-cols-1 grid-flow-row'>
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
