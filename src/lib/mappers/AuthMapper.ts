import type { SignupUserData } from '../domains/AuthDomain';
import type { PostSignupResponse } from '../../remote/response/PostSignupResponse';

export const authMapper = {
  toSignupUserDataDomain: (response: PostSignupResponse): SignupUserData => ({
    name: response.name,
    studentId: response.studentId,
    email: response.email,
  }),
};
