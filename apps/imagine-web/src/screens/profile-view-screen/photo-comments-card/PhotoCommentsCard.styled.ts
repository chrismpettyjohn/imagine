import styled from "styled-components";

export const PhotoCommentsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  max-height: 220px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
`