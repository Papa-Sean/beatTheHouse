import React from 'react';
import Bet from './Bet';
import { useAllBetsContext } from '../pages/AllBets';
import PageBtnContainer from './PageBtnContainer';

const BetsContainer = () => {
  const { data } = useAllBetsContext();
  const { bets, numOfPages, totalBets } = data;
  if (bets.length === 0) {
    return <div>No bets...</div>;
  }
  return (
    <section className='align-element'>
      <h5 className='text-5xl font-extrabold uppercase mb-4'>
        {totalBets} bet{bets.length > 1 && 's'} placed:
      </h5>
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
      {numOfPages > 1 && <PageBtnContainer />}
    </section>
  );
};

export default BetsContainer;
