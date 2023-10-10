import styled from "styled-components";

export const ArticleHeaderContainer = styled.div`
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  height: 150px;
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const ArticleHeaderContent = styled.div`
  color: ${({ theme }) => theme.color.s20};
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.twoUnits};
  position: relative;

  h1 {
    z-index: 2;
    margin: 0 auto;
  }
  p {
    z-index: 2;
    margin: 0 auto;
  }
`

export const ArticleHeaderBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ArticleHeaderOverlay = styled.div`
  background: ${({ theme }) => theme.color.s30};
  opacity: 0.65;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const ArticleContentElement = styled.div`
  background: ${({ theme }) => theme.color.s20};
  border-left:${({ theme }) => `2px solid ${theme.color.s40}`};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius: ${({ theme }) => theme.radius.oneUnit};
  display: flex;
  flex: 1;
`

export const ArticleContentContainer = styled.div`
  background: ${({ theme }) => theme.color.s20};
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.twoUnits};
`