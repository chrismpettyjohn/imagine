import styled from "styled-components";

export const ButtonElement = styled.button`
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  cursor: pointer;
  padding: ${({ theme }) => theme.space.oneUnit};
  &:hover {
    border-color: ${({ theme }) => theme.color.s30};
    color: ${({ theme }) => theme.color.s30};
  }
`