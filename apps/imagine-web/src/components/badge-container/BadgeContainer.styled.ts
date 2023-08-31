import styled from "styled-components";

export const BadgeContainerElement = styled.div`
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;  
  gap: ${({ theme }) => theme.space.twoUnits};
`

export const BadgeHolder = styled.div`
  background: ${({ theme }) => theme.color.s30};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  padding: ${({ theme }) => theme.space.quarterUnit};
`;
