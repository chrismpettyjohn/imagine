import styled from "styled-components";

export const InputElement = styled.input`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  color: ${({ theme }) => theme.color.brand};
  display: flex;
  flex: 1;
  padding: ${({ theme }) => theme.space.oneUnit};
  &::placeholder {
    color: ${({ theme }) => theme.color.brand};
  }
`