import { StyledProps } from 'client/src/common/typings'

export interface SignInProps extends StyledProps {
  navigateToSignUpPage?(): void
  navigateToForgotPasswordPage?(): void
}
