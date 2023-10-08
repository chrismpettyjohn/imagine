import styled from "styled-components";

export const PhotoViewScreenContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
`

export const PhotoViewScreenImagePreview = styled.img`
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  height: 576px;
  width: 100%;
`

export const PhotoViewScreenInfoContainer = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.halfUnit};
  .blue {
   color: ${({ theme }) => theme.color.s50};
  }
  .red {
   color: red;
  }
`