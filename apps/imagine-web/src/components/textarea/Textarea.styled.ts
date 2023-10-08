import styled from "styled-components";

export const TextareaElement = styled.textarea`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.brand};
  padding: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.brand};
  }
`