import styled from "styled-components";

export const FurnitureValueGridContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ theme }) => theme.space.oneUnit};
`