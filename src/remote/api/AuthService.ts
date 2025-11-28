import type { PostSignupRequest } from '../request/PostSignupRequest';
import type { PostSignupResponse } from '../response/PostSignupResponse';
import { api } from './AxiosInstance';

export class AuthService {
  signup = async (signupData: PostSignupRequest): Promise<PostSignupResponse> => {
    try {
      const response = await api.post<PostSignupResponse>('/signup', signupData);
      return response.data;
    } catch (error) {
      console.error('Signup API 요청 실패:', error);
      throw error;
    }
  };
}
