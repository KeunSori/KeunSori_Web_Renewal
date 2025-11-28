import type { AuthRepository } from '../../domain/repositories/AuthRepository';
import type { AuthService } from '../../remote/api/AuthService';
import type { PostSignupRequest } from '../../remote/request/PostSignupRequest';
import type { PostSignupResponse } from '../../remote/response/PostSignupResponse';

export class AuthRepositoryImpl implements AuthRepository {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async signup(signupData: PostSignupRequest): Promise<PostSignupResponse> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.authService.signup(signupData);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
