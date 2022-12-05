import React from 'react';
import { createRoot } from 'react-dom/client';
import 'leaflet/dist/leaflet.css';

import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
