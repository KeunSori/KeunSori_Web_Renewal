import Modal from '../../../shared/component/Modal';

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
    <Modal
      question="연습실 예약을 확정하시겠습니까?"
      description1="날짜: 2026년 2월 12일"
      description2="시간: 13:30 ~ 14:30"
      description3="악기: 보컬"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default ConfirmReservationModal;
