import styled from "styled-components";

export const LatestArticlesGridElement = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: ${({ theme }) => theme.space.twoUnits};
`

