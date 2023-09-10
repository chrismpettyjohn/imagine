import styled from "styled-components";

export const BadgeContainerElement = styled.div`
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;  
  gap: ${({ theme }) => theme.space.twoUnits};
`

export const BadgeHolder = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  cursor: pointer;
  padding: ${({ theme }) => theme.space.quarterUnit};
  &:hover {
    border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
`;
