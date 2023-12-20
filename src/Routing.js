import { createBrowserRouter } from 'react-router-dom';
import Main from './components/pages/Main';
import Collection1 from './components/pages/Сollection1';
import MenPage from './components/pages/MenPage';
import Layout from './components/Layout';
import ErrorPage from './components/pages/ErrorPage';
import ProductPage from './components/pages/ProductPage';
import Delivery from './components/pages/Delivery';
import Returns from './components/pages/Returns';
import FAQPage from './components/pages/FAQ';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Account from './components/pages/Account';
import Bag from './components/Bag';

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
        path: "/faq",
        element: <FAQPage />
      },
      {
        path:"/faq/:id",
        element: <FAQItem />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/products/:id/:color",
        element: <ProductPage />
      },
      {
        path: "/bag",
        element: <Bag />
      }
    ]
  }
])
