import { createBrowserRouter, Navigate } from 'react-router';
import { publicRoutes } from './PublicRoutes';
import { protectedRoutes } from './ProtectedRoutes';

const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export default router;
