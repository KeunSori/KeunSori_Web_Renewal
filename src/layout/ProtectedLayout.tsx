import ProtectedHeader from '../shared/component/ProtectedHeader';
import { Outlet } from 'react-router';

const ProtectedLayout = () => {
  return (
    <>
      <ProtectedHeader />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
