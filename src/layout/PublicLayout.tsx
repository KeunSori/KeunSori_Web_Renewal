import PublicHeader from '../shared/component/PublicHeader';
import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <Outlet />
    </>
  );
};

export default PublicLayout;
