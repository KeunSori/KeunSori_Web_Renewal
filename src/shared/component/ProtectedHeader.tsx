/* 회원 헤더 */

import { useNavigate } from 'react-router';
import HeaderContainer from '../style/HeaderContainer';

const ProtectedHeader = () => {
  const nav = useNavigate();
  return (
    <HeaderContainer
      menus={[
        { label: '연습실', onClick: () => nav('/practice-room') },
        { label: '마이페이지', onClick: () => nav('/mypage') },
        { label: '로그아웃', onClick: () => nav('/logout') },
      ]}
    />
  );
};

export default ProtectedHeader;
