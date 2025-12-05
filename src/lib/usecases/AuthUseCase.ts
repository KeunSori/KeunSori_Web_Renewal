import type { SignupUserData } from '../domains/AuthDomain';
import { authMapper } from '../mappers/AuthMapper';
import { authService } from '../../remote/api/AuthService';
import type { PostSignupRequest } from '../../remote/request/PostSignupRequest';

export const AuthUseCase = {
  signup: async (signupData: PostSignupRequest): Promise<SignupUserData> => {
    const res = await authService.signup(signupData);
    return authMapper.toSignupUserDataDomain(res);
  },
};
