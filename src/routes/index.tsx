import { createBrowserRouter } from 'react-router-dom';

import General from '../pages/General';
import Specific from '../pages/Specific';

export default createBrowserRouter([
  {
    path: '/',
    element: <General />,
  },
  {
    path: 'other',
    element: <Specific />,
  },
]);
