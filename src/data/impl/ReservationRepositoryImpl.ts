import type { ReservationRepository } from '../../domain/repositories/ReservationRepository';
import type { ReservationService } from '../../remote/api/ReservationService';
import type { PutReservationRequest } from '../../remote/request/PutReservationRequest';

export class ReservationRepositoryImpl implements ReservationRepository {
  private reservationService: ReservationService;
  constructor(reservationService: ReservationService) {
    this.reservationService = reservationService;
  }

  async putReservation(
    reservationId: number,
    reservationData: PutReservationRequest
  ): Promise<void> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.reservationService.putReservation(reservationId, reservationData);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
