import styled from "styled-components";

export const CommentContainerElement = styled.div`
  align-items: center;
  border-bottom:${({ theme }) => `1px solid ${theme.color.s40}`};
  display: flex;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
`

export const CommentContainerContent = styled.div`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
  padding: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`

export const CommentContainerUser = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color:${({ theme }) => theme.color.s60};
    margin-top: 0;
  }
`

export const CommentContainerAvatar = styled.img`
  background:${({ theme }) => theme.color.s40};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  height: 62px;
  width: 54px;
`
export const CommentContainerMessage = styled.div`
  align-items: center;
  background:${({ theme }) => theme.color.s40};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
  overflow: hidden;
  padding: ${({ theme }) => theme.space.oneUnit};
  height: 62px;
  width: 100%;
`