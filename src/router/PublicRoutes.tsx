import { type RouteObject } from 'react-router';
import HomePage from '../pages/home/screen/HomePage';
import ApplyPage from '../pages/apply/screen/ApplyPage';
import ContactPage from '../pages/contact/screen/ContactPage';

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/apply', element: <ApplyPage /> },
  { path: '/contact', element: <ContactPage /> },
];
