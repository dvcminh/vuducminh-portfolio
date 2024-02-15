import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../containers/Root/Root';
import Home from '../containers/Home/Home';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        // { path: '/about', element: <About /> },
        // { path: '/contact', element: <Contact /> }
      ]

    }
  ]);
export default router