import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import {
  AddBet,
  AllBets,
  AllGames,
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  UserProfile,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addBetAction } from './pages/AddBet';

import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allGamesLoader } from './pages/AllGames';
import { loader as addBetLoader } from './pages/AddBet';
import { loader as getAllBetsLoader } from './pages/AllBets';

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
          },
          {
            path: 'allbets',
            element: <AllBets />,
            loader: getAllBetsLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
