import styled from "styled-components";
import { Grid } from "./Grid";

export const GridLarge = styled(Grid)`
  @media (min-width: 1800px) {
    grid-template-columns: 1fr 1fr;
  }
`