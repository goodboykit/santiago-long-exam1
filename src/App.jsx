import './App.css';
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Recommended from './pages/Recommended';
import Section from './pages/Section';
import ItemDetails from './pages/ItemDetails';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Recommended />,
      },
      {
        path: 'section/:sectionId',
        element: <Section />,
      },
      {
        path: 'item/:sectionId/:itemId',
        element: <ItemDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
