import styled from "styled-components";

export const LargeGroupContainerElement = styled.div`
  align-items: center;
  background:  ${({ theme }) => theme.color.s30};
  border:${({ theme }) => `2px solid ${theme.color.s40}`};
  border-radius:  ${({ theme }) => theme.radius.oneUnit};
  color:  ${({ theme }) => theme.color.s20};
  cursor: pointer;
  display: flex;
  flex: 1;
  margin-top: ${({ theme }) => theme.space.oneUnit};
  padding: ${({ theme }) => theme.space.oneUnit};
  gap: ${({ theme }) => theme.space.oneUnit};
  &:hover {
      border:${({ theme }) => `2px solid ${theme.color.s60}`};
  }
  img {
  height: 64px;
  }
`

export const LargeGroupContainerInformation = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.oneUnit};
  width: 100%;
  h3, h5 {
    margin: 0;
  }
`