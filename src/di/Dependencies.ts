import { AuthRepositoryImpl } from '../data/impl/AuthRepositoryImpl';
import { ReservationRepositoryImpl } from '../data/impl/ReservationRepositoryImpl';
import { AuthService } from '../remote/api/AuthService';
import { ReservationService } from '../remote/api/ReservationService';

// 1. service 인스턴스 생성
export const authService = new AuthService();
export const reservationService = new ReservationService();

// 2. repository 인스턴스 생성
export const reservationRepository = new ReservationRepositoryImpl(reservationService);
export const authRepository = new AuthRepositoryImpl(authService);
