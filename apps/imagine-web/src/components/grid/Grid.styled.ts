import styled from "styled-components";
import { GridSize } from "./Grid.types";

export const GridElement = styled.div <{ $size: GridSize }>`
  display: grid;
  grid-template-columns: ${({ theme, $size }) => $size === 'normal' ? theme.grid.normal : theme.grid.wide};
  gap: ${({ theme }) => theme.space.oneUnit};
`