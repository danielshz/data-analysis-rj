import { createBrowserRouter } from 'react-router-dom';

import HealthUnit from '../pages/HealthUnit';
import CECAD from '../pages/CECAD';
import Covid from '../pages/Covid';

export default createBrowserRouter([
  {
    path: '/',
    element: <HealthUnit />,
  },
  {
    path: 'income',
    element: <CECAD />,
  },
  {
    path: 'poverty',
    element: <CECAD />,
  },
  {
    path: 'bolsa_familia',
    element: <CECAD />,
  },
  {
    path: 'covid',
    element: <Covid />,
  },
]);
