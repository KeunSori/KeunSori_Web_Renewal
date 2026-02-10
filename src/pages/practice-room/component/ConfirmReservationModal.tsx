import { Modal } from '../../../shared/component/modal/ModalItems';

/**
 * @param onCancel 취소 버튼 클릭 시 호출되는 함수
 * @param onConfirm 확인 버튼 클릭 시 호출되는 함수
 */

interface ConfirmReservationModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmReservationModal = ({ onCancel, onConfirm }: ConfirmReservationModalProps) => {
  return (
    <Modal>
      <Modal.Content>
        <Modal.Title>예약을 확정하시겠습니까?</Modal.Title>
        <Modal.DescriptionContainer>
          <Modal.Description>예약이 확정되면 변경 및 취소가 불가능합니다.</Modal.Description>
          <Modal.Description>신중히 선택해주세요.</Modal.Description>
        </Modal.DescriptionContainer>
        <Modal.ActionsContainer>
          <Modal.Cancel onClick={onCancel}>취소</Modal.Cancel>
          <Modal.Confirm onClick={onConfirm}>확인</Modal.Confirm>
        </Modal.ActionsContainer>
      </Modal.Content>
    </Modal>
  );
};

export default ConfirmReservationModal;
