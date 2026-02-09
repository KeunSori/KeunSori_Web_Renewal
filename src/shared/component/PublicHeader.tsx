import { useNavigate } from 'react-router';
import HeaderContainer from '../style/HeaderContainer';

/* 비회원 헤더 */

const PublicHeader = () => {
  const nav = useNavigate();
  return (
    <HeaderContainer
      menus={[
        { label: '지원하기', onClick: () => nav('/apply') },
        { label: '문의하기', onClick: () => nav('/contact') },
        { label: '마이페이지', onClick: () => nav('/mypage') },
      ]}
    />
  );
};

export default PublicHeader;
