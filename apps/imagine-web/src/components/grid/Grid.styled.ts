import styled from "styled-components";
import { GridSizes } from "../../theme/ThemeProvider.types";

export const GridElement = styled.div <{ $size: GridSizes }>`
  display: grid;
  gap: ${({ theme }) => theme.space.oneUnit};
  grid-template-columns: 1fr;
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`