import styled from "styled-components";
import { GridSizes } from "../../theme/ThemeProvider.types";

export const GridElement = styled.div <{ $size: GridSizes }>`
  display: grid;
  grid-template-columns: ${({ theme, $size }) => theme.grid[$size]};
  gap: ${({ theme }) => theme.space.oneUnit};
`