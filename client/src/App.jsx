import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import {
  AddAPIGame,
  AddBet,
  AllBets,
  AllGames,
  DashboardLayout,
  Error,
  GetAPIGames,
  HomeLayout,
  Landing,
  LeaderBoard,
  Login,
  Register,
  UserProfile,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addBetAction } from './pages/AddBet';
import { action as addAPIGameAction } from './pages/AddAPIGame';

import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allGamesLoader } from './pages/AllGames';
import { loader as addBetLoader } from './pages/AddBet';
import { loader as getAllBetsLoader } from './pages/AllBets';
import { loader as leaderBoardLoader } from './pages/LeaderBoard';
import { loader as userProfileLoader } from './pages/UserProfile';
// import { loader as getAPIGamesLoader } from './pages/GetAPIGames';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AllGames />,
            loader: allGamesLoader,
          },
          {
            path: 'addbet/:id',
            element: <AddBet />,
            action: addBetAction,
            loader: addBetLoader,
          },
          {
            path: 'profile',
            element: <UserProfile />,
            loader: userProfileLoader,
          },
          {
            path: 'allbets',
            element: <AllBets />,
            loader: getAllBetsLoader,
          },
          {
            path: 'leaderboard',
            element: <LeaderBoard />,
            loader: leaderBoardLoader,
          },
          // {
          //   path: 'addAPIgame',
          //   element: <AddAPIGame />,
          //   action: addAPIGameAction,
          // },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
