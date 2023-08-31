import styled from "styled-components";

export const LatestArticlesListElement = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.twoUnits};
  width: 100%;
`