import styled from "styled-components";

export const StoryContainerElement = styled.div`
  img {
    border-radius: ${({ theme }) => theme.space.oneUnit};
    width: 140px;
    height: 140px;
  }
`