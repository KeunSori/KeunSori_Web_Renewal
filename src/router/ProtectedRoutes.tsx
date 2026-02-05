import { type RouteObject } from 'react-router';
import MyPage from '../pages/mypage/screen/MyPage';
import PractiveRoomPage from '../pages/practice-room/screen/PractiveRoomPage';

export const protectedRoutes: RouteObject[] = [
  { path: '/mypage', element: <MyPage /> },
  { path: '/practice-room', element: <PractiveRoomPage /> },
];
