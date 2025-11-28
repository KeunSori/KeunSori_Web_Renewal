import type { PutReservationRequest } from '../request/PutReservationRequest';
import { api } from './AxiosInstance';

export class ReservationService {
  putReservation = async (
    reservationId: number,
    reservationData: PutReservationRequest
  ): Promise<void> => {
    try {
      await api.put(`/reservation/${reservationId}`, reservationData);
    } catch (error) {
      console.error('Put Reservation API 요청 실패:', error);
      throw error;
    }
  };
}
