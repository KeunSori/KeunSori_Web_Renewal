import { useNavigate } from 'react-router';
import logoBlack from '../../assets/logo/logo-black.svg';

/* 공용 헤더 스타일 컨테이너 */

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface HeaderContainerProps {
  menus: MenuItem[];
}
const HeaderContainer = ({ menus }: HeaderContainerProps) => {
  const nav = useNavigate();
  return (
    <div className="flex">
      <div className="absolute w-full">
        <div className="flex h-[70px] w-full flex-row justify-between bg-white px-[150px]">
          <img src={logoBlack} onClick={() => nav('/')} className="size-16" alt="큰소리 로고" />
          <ul className="flex flex-row items-center gap-[30px]">
            {menus.map((menu) => (
              <li key={menu.label} onClick={menu.onClick}>
                {menu.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[0.5px] bg-black"> </div>
      </div>
      <div className="mb-[70px]" />
    </div>
  );
};

export default HeaderContainer;
