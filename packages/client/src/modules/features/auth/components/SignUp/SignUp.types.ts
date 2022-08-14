import { StyledProps } from 'client/src/common/typings'

export interface SignUpProps extends StyledProps {
  navigateToSignInPage?(): void
}
