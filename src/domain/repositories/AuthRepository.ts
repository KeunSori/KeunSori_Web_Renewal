import type { PostSignupRequest } from '../../remote/request/PostSignupRequest';
import type { PostSignupResponse } from '../../remote/response/PostSignupResponse';

export interface AuthRepository {
  signup(signupData: PostSignupRequest): Promise<PostSignupResponse>;
}
