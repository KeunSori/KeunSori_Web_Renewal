import Footer from '../shared/component/Footer';
import PublicHeader from '../shared/component/PublicHeader';
import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
