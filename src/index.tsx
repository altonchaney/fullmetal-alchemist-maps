import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Map } from 'character-journey-map';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { DATA } from './data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Map data={DATA} name='Fullmetal Alchemist: Brotherhood' />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
