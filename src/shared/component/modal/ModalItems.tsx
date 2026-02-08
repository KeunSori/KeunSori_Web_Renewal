import type { ReactNode } from 'react';
import { ModalCancel, ModalConfirm } from './ModalButtons';

/**
 * 모달 컴포넌트 모음
 * @property Modal.Content 모달 내용 컴포넌트
 * @property Modal.Title 모달 제목 컴포넌트
 * @property Modal.DescriptionContainer 모달 설명 컨테이너 컴포넌트
 * @property Modal.Description 모달 설명 컴포넌트
 * @property Modal.ActionsContainer 모달 액션 컨테이너 컴포넌트
 * @property Modal.Cancel 모달 취소 버튼 컴포넌트
 * @property Modal.Confirm 모달 확인 버튼 컴포넌트
 */

interface ModalRootProps {
  children: ReactNode;
}

const ModalRoot = ({ children }: ModalRootProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">{children}</div>
  );
};

const ModalContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 text-center">
      {children}
    </div>
  );
};

const ModalTitle = ({ children }: { children: ReactNode }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

const ModalDescriptionContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-[1px]">{children}</div>;
};

const ModalDescription = ({ children }: { children: ReactNode }) => {
  return <div className="text-sm text-brand-gray">{children}</div>;
};

const ModalActionsContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2">{children}</div>;
};

export const Modal = Object.assign(ModalRoot, {
  Content: ModalContent,
  Title: ModalTitle,
  DescriptionContainer: ModalDescriptionContainer,
  Description: ModalDescription,
  ActionsContainer: ModalActionsContainer,
  Cancel: ModalCancel,
  Confirm: ModalConfirm,
});
