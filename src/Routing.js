import { createBrowserRouter } from 'react-router-dom';
import Main from './components/pages/Main';
import Collection1 from './components/pages/Сollection1';
import MenPage from './components/pages/MenPage';
import Layout from './components/Layout';
import ErrorPage from './components/pages/ErrorPage';
import ProductPage from './components/pages/ProductPage';
import Delivery from './components/pages/Delivery';
import Returns from './components/pages/Returns';

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Main />,
        index: true
      },
      {
        path: "/men",
        element: <MenPage />
      },
      {
        path: "/w&k",
        element: <Collection1 />
      },
      {
        path: "/delivery",
        element: <Delivery />
      },
      {
        path: "/returns",
        element: <Returns />
      },
      {
        path: "/products/:id/:color",
        element: <ProductPage />
      }
    ]
  }
])
