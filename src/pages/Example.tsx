import { reservationRepository } from '../di/Dependencies';

const Example = () => {
  const handlePutReservation = async () => {
    try {
      const response = await reservationRepository.putReservation(1, {
        reservationType: '',
        reservationSession: '',
        reservationDate: '2024-06-20',
        reservationStartTime: '18:00',
        reservationEndTime: '19:00',
      });
      console.log('Reservation updated successfully:', response);
    } catch (error) {
      console.error('Failed to update reservation:', error);
    }
  };
  return <div onClick={handlePutReservation}>reservation PUT API 호출하기</div>;
};

export default Example;
