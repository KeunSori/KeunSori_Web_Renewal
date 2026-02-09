import { createBrowserRouter, Navigate } from 'react-router';
import { publicRoutes } from './PublicRoutes';
import { protectedRoutes } from './ProtectedRoutes';
import ProtectedLayout from '../layout/ProtectedLayout';
import PublicLayout from '../layout/PublicLayout';

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: publicRoutes,
  },
  {
    element: <ProtectedLayout />,
    children: protectedRoutes,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export default router;
