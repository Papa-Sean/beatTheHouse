import React from 'react';
import { useAllGamesContext } from '../pages/AllGames';
import Game from './Game';

const GamesContainer = () => {
  const { data } = useAllGamesContext();
  const { games } = data;
  if (games.length === 0) {
    return <h2>No games to display...</h2>;
  }
  return (
    <section className='grid py-8'>
      <div className='grid justify-items-center md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2'>
        {games.map((game) => {
          return (
            <Game
              className=''
              key={game._id}
              {...game}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GamesContainer;
