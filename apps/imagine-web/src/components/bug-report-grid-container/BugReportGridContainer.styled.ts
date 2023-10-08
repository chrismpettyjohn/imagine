import styled from "styled-components";

export const BugReportGridContainerElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border: ${({ theme }) => `2px solid ${theme.color.s30}`};
  border-radius: ${({ theme }) => theme.radius.twoUnits};
  cursor: pointer;
  display: grid;
  gap: ${({ theme }) => theme.space.twoUnits};
  grid-template-columns: 1fr 2fr;
  padding: ${({ theme }) => theme.space.twoUnits};
  &:hover {
    border-color: ${({ theme }) => theme.color.s40};
  }
`