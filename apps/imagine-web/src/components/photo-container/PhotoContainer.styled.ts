import styled from "styled-components";

export const PhotoContainerElement = styled.div`
  img {
    border:${({ theme }) => `2px solid ${theme.color.s40}`};
    border-radius: ${({ theme }) => theme.space.oneUnit};
    cursor: pointer;
    width: 140px;
    height: 140px;
    &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
    }
  }
`