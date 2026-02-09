import { useState } from 'react';
import ConfirmReservationModal from '../component/ConfirmReservationModal';
import InstrumentBox from '../component/InstrumentBox';

const PractiveRoomPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleReserve = () => {
    // 예약하기 버튼 클릭 시 동작할 로직 작성
    console.log('예약하기 버튼이 클릭되었습니다.');
    setOpenModal(true);
  };
  return (
    <div>
      <div>PracticeRoomPage</div>
      <button className="mb-5 border" onClick={handleReserve}>
        예약하기
      </button>
      {openModal && (
        <ConfirmReservationModal
          onConfirm={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
        />
      )}
      <InstrumentBox instrument="보컬" />
      <InstrumentBox selected instrument="베이스" />
    </div>
  );
};

export default PractiveRoomPage;
