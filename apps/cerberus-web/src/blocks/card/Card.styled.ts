import styled from "styled-components";
import { CardElevation } from "./Card.types";

export const CardElement = styled.div<{ $elevation: CardElevation }>`
  background: ${({ theme, $elevation }) => {
    if ($elevation === 2) {
      return theme.color.s50;
    };
    return theme.color.s20;
  }};
  border:${({ theme, $elevation }) => {
    let borderColor = theme.color.s40;
    if ($elevation === 2) {
      borderColor = theme.color.s60;
    };
    return `2px solid ${borderColor}`
  }};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  width: 100%;
`

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  overflow: hidden;
  padding: ${({ theme }) => theme.space.twoUnits};
  h1 {
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    font-weight: 700;
  }
`

export const CardHeader = styled.div`
    font-size: ${({ theme }) => theme.fontSize.twoUnits};
    font-weight: 700;
`