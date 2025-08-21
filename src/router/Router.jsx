import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Cheddar from '../pages/Cheddar';
import Mozzarella from '../pages/Mozzarella';
import Contact from '../pages/Contact';
import Deals from '../pages/Deals';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import CheckOut from '../pages/CheckOut';
import ShopAll from '../pages/ShopAll';
import Shredded from '../pages/Shredded';
import BusinessCustomers from '../pages/BusinessCustomers';
import AboutUs from '../pages/AboutUs';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Deals',
        element: <Deals />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Orders',
        element: <Orders />,
      },
      {
        path: '/CheckOut',
        element: <CheckOut />,
      },
      {
        path: '/Collection',
        element: <ShopAll />,
      },
      {
        path: '/Shredded',
        element: <Shredded />,
      },
      {
        path: '/Cheddar',
        element: <Cheddar />,
      },
      {
        path: '/Mozzarella',
        element: <Mozzarella />,
      },
      {
        path: '/Business',
        element: <BusinessCustomers />,
      },
      {
        path: '/About',
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
