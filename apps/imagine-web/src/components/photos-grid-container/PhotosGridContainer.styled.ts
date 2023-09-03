import styled from "styled-components";

export const PhotosGridContainerElement = styled.div`
  background:  ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  width: 100%;
`;

export const PhotosGridContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  overflow: hidden;
  padding:  ${({ theme }) => theme.space.oneUnit};
`