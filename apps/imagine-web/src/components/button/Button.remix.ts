import { Button } from "./Button";
import styled from "styled-components";

export const ButtonPrimary = styled(Button)`
  color: ${({ theme }) => theme.color.brand};
  border-color: ${({ theme }) => theme.color.brand};
`

export const ButtonDanger = styled(Button)`
  border-color: #7C0F0F;
  color: #7C0F0F;
  &:hover {
    border-color: #B90909;
    color: #B90909;
  }
`

export const ButtonNoBorder = styled(Button)`
  border-color: transparent;
`