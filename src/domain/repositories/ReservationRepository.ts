import type { PutReservationRequest } from '../../remote/request/PutReservationRequest';

export interface ReservationRepository {
  putReservation(reservationId: number, reservationData: PutReservationRequest): Promise<void>;
}
