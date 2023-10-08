import styled from "styled-components";
import { Grid } from "./Grid";

export const GridLarge = styled(Grid)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakPoints.desktop}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`
export const GridLargeSmall = styled(Grid)`
  ${({ theme }) => `
    @media (min-width: ${theme.breakPoints.desktop}) {
      grid-template-columns: 2fr 1fr;
    }
  `}
`