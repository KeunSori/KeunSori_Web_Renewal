import type { ReactNode } from 'react';

/**
 * 모달 버튼 컴포넌트 모음
 * @property ModalCancel 모달 취소 버튼 컴포넌트
 * @property ModalConfirm 모달 확인 버튼 컴포넌트
 */

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const ModalCancel = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="border-brand-yellow- rounded-md border px-9 py-1 text-brand-yellow"
    >
      {children}
    </button>
  );
};

const ModalConfirm = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="rounded-md bg-brand-yellow px-9 py-1 text-white">
      {children}
    </button>
  );
};

export { ModalCancel, ModalConfirm };
