import styled from "styled-components";
import { Grid } from "./Grid";

export const GridLarge = styled(Grid)`
  ${({ theme }) => `
    @media (max-width: ${theme.breakPoints.desktop}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`