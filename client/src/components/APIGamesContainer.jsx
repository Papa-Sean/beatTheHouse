import React from 'react';
import { useGetAPIGamesContext } from '../pages/GetAPIGames';
import APIGame from './APIGame';

const APIGamesContainer = () => {
  const { data } = useGetAPIGamesContext();
  const games = data;
  //   console.log(games[0].bookmakers[0].markets[1].outcomes[0].point);

  return (
    <section className='grid py-8'>
      <div className='grid justify-items-center md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2'>
        {games.map((game) => {
          const away_spread =
            game.bookmakers[0]?.markets[1]?.outcomes[0]?.point;
          const home_spread =
            game.bookmakers[0]?.markets[1]?.outcomes[1]?.point;
          const gameId = game.id;

          return (
            <APIGame
              className=''
              key={game.id}
              {...game}
              away_spread={away_spread}
              home_spread={home_spread}
              gameId={gameId}
            />
          );
        })}
      </div>
    </section>
  );
};

export default APIGamesContainer;
