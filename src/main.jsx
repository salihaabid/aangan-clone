// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
import ShopContextProvider from './context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <RouterProvider router={router} />
  </ShopContextProvider>
);
