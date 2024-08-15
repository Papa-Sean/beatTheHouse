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
    <section className='align-element gap-10 my-10'>
      <div className='flex-col md:columns-2 sm:columns-1 sm:align-element'>
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
