import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login/Login';
// import Account from './Login/Account';
import Oauth from './Login/oauth';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: '/oauth',
        element: <Oauth />,
      },
    ],
  },
]);

export default router;
