import styled from "styled-components";
import { GridSizes } from "../../theme/ThemeProvider.types";

export const GridElement = styled.div <{ $size: GridSizes }>`
  display: grid;
  gap: ${({ theme }) => theme.space.oneUnit};
  grid-template-columns: 1fr;
  ${({ theme }) => `
    @media (min-width: ${theme.breakPoints.tablet}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
  ${({ theme }) => `
    @media (min-width: ${theme.breakPoints.desktop}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `}
`