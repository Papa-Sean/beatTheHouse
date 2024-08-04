import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import {
  Dashboard,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  UserProfile,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

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
        element: <Dashboard />,
      },
      {
        path: 'userprofile',
        element: <UserProfile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
