import styled from "styled-components";

export const TextareaElement = styled.textarea`
  color: ${({ theme }) => theme.color.s60};
  background: ${({ theme }) => theme.color.s20};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  border: ${({ theme }) => `1px solid ${theme.color.s40}`};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`