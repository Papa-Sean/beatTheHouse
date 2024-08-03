import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl =
  'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=d59a0f4eaf726e096c662be019bea1b1&regions=us&markets=h2h,spreads,totals&oddsFormat=american&bookmakers=betmgm';

const BetAPIContext = React.createContext();

const BetAPIProvider = ({ children }) => {
  const [games, setGames] = useState({});

  const searchGames = async () => {
    const response = await axios(`${rootUrl}`).catch((err) => console.log(err));

    if (response) {
      setGames(response);
      console.log(response);
    } else {
      console.log('There is an error somewheres');
    }
  };
  return (
    <BetAPIContext.Provider
      value={{
        games,
        searchGames,
      }}
    >
      {children}
    </BetAPIContext.Provider>
  );
};

export { BetAPIProvider, BetAPIContext };
