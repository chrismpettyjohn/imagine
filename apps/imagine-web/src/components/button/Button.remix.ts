import { Button } from "./Button";
import styled from "styled-components";

export const ButtonPrimary = styled(Button)`
  color: ${({ theme }) => theme.color.s30};
  border-color: ${({ theme }) => theme.color.s30};
`