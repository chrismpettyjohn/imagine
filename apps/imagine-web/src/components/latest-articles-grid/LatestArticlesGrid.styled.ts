import styled from "styled-components";

export const LatestArticlesGridElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.space.twoUnits};
`

