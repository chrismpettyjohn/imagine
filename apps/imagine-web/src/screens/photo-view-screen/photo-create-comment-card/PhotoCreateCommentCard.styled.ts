import styled from "styled-components";

export const PhotoCreateCommentCardForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
`

export const PhotoCreateCommentCardActions = styled.div`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space.oneUnit};
  justify-content: flex-end;
  width: 100%;

`