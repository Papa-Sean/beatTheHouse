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
      },
      {
        path: 'register',
        element: <Register />,
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
