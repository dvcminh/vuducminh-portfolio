import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../containers/Root/Root';
import Home from '../containers/Home/Home'
import Project from '../containers/Project/Project';
import About from '../containers/About/About';
import Resume from '../containers/Resume/Resume';
import Contact from '../containers/Contact/Contact';
const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/project', element: <Project /> },
        { path: '/resume', element: <Resume /> },
        { path: '/contact', element: <Contact /> }
      ]
    }
  ]);
export default router