import styled from "styled-components";

export const InputElement = styled.input`
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  padding: ${({ theme }) => theme.space.halfUnit};
`