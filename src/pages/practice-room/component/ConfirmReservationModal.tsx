import Modal from '../../../shared/component/Modal';

interface ConfirmReservationModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmReservationModal = ({ onCancel, onConfirm }: ConfirmReservationModalProps) => {
  return (
    <Modal
      question="연습실 예약을 확정하시겠습니까?"
      discription1="날짜: 2026년 2월 12일"
      discription2="시간: 13:30 ~ 14:30"
      discription3="악기: 보컬"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default ConfirmReservationModal;
